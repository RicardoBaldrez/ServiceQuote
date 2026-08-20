import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable, Alert, ScrollView } from 'react-native';

import Button from '@/components/Button';
import CompleteAmount from '@/components/CompleteAmount';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';

import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { calculateQuoteTotals, formatCurrency, formatDate } from '@/utils';

import { styles } from './styles';

export default function QuoteDetailsPage() {
  const navigation = useNavigation();

  const [quote, setQuote] = useState<any | null>(null);

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

  const hasDiscount = quote?.discountPct > 0;

  const handleremoveQuote = useCallback(async () => {
    try {
      await itemsStorage.remove(id);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao remover orçamento');
    }
  }, [navigation]);

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
            <Text>Orçamento #{quote?.id}</Text>
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
          {quote?.items?.map((service: any) => (
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
            label="Visualizar orçamento"
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
                  { text: 'Excluir', onPress: handleremoveQuote },
                ],
              )
            }
          />
          <Button
            label="Visualizar orçamento"
            variant="rounded"
            icon={
              <MaterialIcons name="content-copy" size={20} color="#6A46EB" />
            }
          />
          <Button
            label="Visualizar orçamento"
            variant="rounded"
            icon={<MaterialIcons name="edit" size={20} color="#6A46EB" />}
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
