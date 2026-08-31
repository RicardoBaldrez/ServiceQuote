import { MaterialIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';

import Button from '@/components/Button';
import Header from '@/components/Header';
import HeaderBackButton from '@/components/HeaderBackButton';
import InfoCard from '@/components/InfoCard';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';

import QuoteSummaryCard from '@/pages/QuoteDetails/components/QuoteSummaryCard';
import QuoteTotalsCard from '@/pages/QuoteDetails/components/QuoteTotalsCard';
import { useQuoteActions } from '@/pages/QuoteDetails/hooks/useQuoteActions';
import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { colors } from '@/theme/colors';
import { Quote } from '@/types/quote';
import { calculateQuoteTotals } from '@/utils';

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

  const { handleRemoveQuote, handleCopyQuote, handleShareQuote } =
    useQuoteActions({ id, quote, totalPriceWithDiscount, navigation });

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
        <HeaderBackButton
          label={`Orçamento #${quote.quoteNumber ?? ''}`}
          onPress={() => navigation.goBack()}
          rightSlot={<Status status={quote.status} />}
        />
      </Header>
      <ScrollView
        style={styles.containerDetails}
        contentContainerStyle={styles.containerDetailsContent}
      >
        <QuoteSummaryCard quote={quote} />
        <InfoCard title="Serviços inclusos" icon="article">
          {quote?.items?.map((service) => (
            <ServiceInformation key={service.id} service={service} />
          ))}
        </InfoCard>
        <InfoCard>
          <QuoteTotalsCard
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            totalPriceWithDiscount={totalPriceWithDiscount}
            discountPct={quote.discountPct}
            hasDiscount={hasDiscount}
          />
        </InfoCard>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerIconButtons}>
          <Button
            variant="rounded"
            icon={
              <MaterialIcons name="delete" size={20} color={colors.danger} />
            }
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
              <MaterialIcons
                name="content-copy"
                size={20}
                color={colors.primary}
              />
            }
            onPress={handleCopyQuote}
          />
          <Button
            variant="rounded"
            icon={
              <MaterialIcons name="edit" size={20} color={colors.primary} />
            }
            onPress={() => navigation.navigate('NewQuote', { id: quote.id })}
          />
        </View>
        <Button
          label="Compartilhar"
          icon={<MaterialIcons name="share" size={20} color={colors.white} />}
          onPress={handleShareQuote}
        />
      </View>
    </View>
  );
}
