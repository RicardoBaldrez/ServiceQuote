import { MaterialIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable, Alert, ScrollView } from 'react-native';

import Button from '@/components/Button';
import CompleteAmount from '@/components/CompleteAmount';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { Quote } from '@/types/quote';
import { calculateQuoteTotals, formatCurrency, formatDate } from '@/utils';

import { styles } from './styles';

export default function QuoteDetailsPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [quote, setQuote] = useState<Quote | null>(null);

  const { id } =
    useRoute<RouteProp<RootStackParamList, 'QuoteDetails'>>().params;

  const getQuote = useCallback(async () => {
    try {
      const item = await itemsStorage.getById(id);
      setQuote(item);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao buscar orçamento');
    }
  }, [id]);

  const { totalPrice, totalPriceWithDiscount, totalDiscount } =
    calculateQuoteTotals(quote?.items ?? [], quote?.discountPct ?? 0);

  const hasDiscount = Number(quote?.discountPct) > 0;

  const handleRemoveQuote = useCallback(async () => {
    try {
      await itemsStorage.remove(id);
      Alert.alert('Sucesso', 'Orçamento removido com sucesso');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao remover orçamento');
    }
  }, [navigation, id]);

  const handleCopyQuote = useCallback(async () => {
    try {
      if (!quote) return;

      const now = new Date().toISOString();

      await itemsStorage.add({
        ...quote,
        id: Math.random().toString(36).substring(2),
        status: StatusType.Draft,
        createdAt: now,
        updatedAt: now,
      });
      Alert.alert('Sucesso', 'Orçamento copiado com sucesso');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('erro', 'Erro ao copiar orçamento.');
    }
  }, [quote, navigation]);

  useEffect(() => {
    getQuote();
  }, [id, getQuote]);

  if (!quote) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerGeral}>
      <Header>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.pressableHeader}
        >
          <View style={styles.containerContentHeader}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#4A4A4A" />
            <Text>Orçamento #{quote?.quoteNumber}</Text>
          </View>
          <Status status={quote?.status} />
        </Pressable>
      </Header>
      <ScrollView
        style={styles.containerDetails}
        contentContainerStyle={styles.containerDetailsContent}
      >
        <View style={styles.quoteInfoCard}>
          <View style={styles.quoteInfoHeader}>
            <View style={styles.quoteInfoIcon}>
              <MaterialIcons name="storefront" size={20} color="#6A46EB" />
            </View>
            <Text style={styles.quoteInfoTitle}>{quote?.title}</Text>
          </View>
          <View style={styles.quoteInfoClient}>
            <Text style={styles.quoteTitleInfo}>Cliente</Text>
            <Text style={styles.quoteValueInfo}>{quote?.client}</Text>
          </View>
          <View style={styles.quoteInfoDatesRow}>
            <View style={styles.quoteInfoDateItem}>
              <Text style={styles.quoteTitleInfo}>Criado em</Text>
              <Text style={styles.quoteValueInfo}>
                {formatDate(quote?.createdAt)}
              </Text>
            </View>
            <View style={styles.quoteInfoDateItem}>
              <Text style={styles.quoteTitleInfo}>Atualizado em</Text>
              <Text style={styles.quoteValueInfo}>
                {formatDate(quote?.updatedAt)}
              </Text>
            </View>
          </View>
        </View>
        <InfoCard title="Serviços inclusos" icon="article">
          {quote?.items?.map((service) => (
            <ServiceInformation key={service.id} service={service} />
          ))}
        </InfoCard>
        <InfoCard>
          <View style={styles.totalsContainer}>
            <View style={styles.totalsRow}>
              <View style={styles.quoteInfoIcon}>
                <MaterialIcons name="attach-money" size={20} color="#6A46EB" />
              </View>
              <View style={styles.totalsContent}>
                <View style={styles.subtotalRow}>
                  <Text style={styles.infoLabel}>Subtotal</Text>
                  <Text
                    style={[
                      styles.subtotalValue,
                      hasDiscount && styles.subtotalValueStrikethrough,
                    ]}
                  >
                    R$ {formatCurrency(totalPrice)}
                  </Text>
                </View>
                {hasDiscount && (
                  <View style={styles.discountRow}>
                    <View style={styles.discountLabelWrapper}>
                      <Text style={styles.infoLabel}>Desconto</Text>
                      <View>
                        <Text style={styles.discountBadge}>
                          {quote.discountPct}% off
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.discountValue}>
                      - R$ {formatCurrency(totalDiscount)}
                    </Text>
                  </View>
                )}
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Investimento total</Text>
                  <CompleteAmount amount={totalPriceWithDiscount} />
                </View>
              </View>
            </View>
          </View>
        </InfoCard>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerIconButtons}>
          <Button
            variant="rounded"
            icon={<MaterialIcons name="delete" size={20} color="#DB4D4D" />}
            onPress={() =>
              Alert.alert(
                'Excluir cotação',
                'Tem certeza que deseja excluir esta cotação?',
                [
                  {
                    text: 'Cancelar',
                    style: 'cancel',
                  },
                  { text: 'Excluir', onPress: handleRemoveQuote },
                ],
              )
            }
          />
          <Button
            variant="rounded"
            icon={
              <MaterialIcons name="content-copy" size={20} color="#6A46EB" />
            }
            onPress={handleCopyQuote}
          />
          <Button
            variant="rounded"
            icon={<MaterialIcons name="edit" size={20} color="#6A46EB" />}
            onPress={() => navigation.navigate('NewQuote', { id: quote?.id })}
          />
        </View>
        <Button
          label="Compartilhar"
          icon={<MaterialIcons name="share" size={20} color="#FFFFFF" />}
        />
      </View>
    </View>
  );
}
