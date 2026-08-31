import { NavigationProp } from '@react-navigation/native';
import { useCallback } from 'react';
import { Alert, Share } from 'react-native';

import { StatusType } from '@/components/Status/types';

import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { Quote } from '@/types/quote';
import { formatCurrency, generateId } from '@/utils';

type UseQuoteActionsParams = {
  id: string;
  quote: Quote | null;
  totalPriceWithDiscount: number;
  navigation: NavigationProp<RootStackParamList>;
};

export function useQuoteActions({
  id,
  quote,
  totalPriceWithDiscount,
  navigation,
}: UseQuoteActionsParams) {
  const handleRemoveQuote = useCallback(async () => {
    try {
      await itemsStorage.remove(id);
      Alert.alert('Sucesso', 'Orçamento removido com sucesso');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao remover orçamento');
    }
  }, [id, navigation]);

  const handleCopyQuote = useCallback(async () => {
    try {
      if (!quote) return;

      const now = new Date().toISOString();

      await itemsStorage.add({
        ...quote,
        id: generateId(),
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

  const handleShareQuote = useCallback(async () => {
    if (!quote) return;

    const itemsList = quote.items
      .map(
        (service) =>
          `- ${service.title} (x${service.quantity}): R$ ${formatCurrency(service.price * service.quantity)}`,
      )
      .join('\n');

    const message = [
      `Orçamento #${quote.quoteNumber} - ${quote.title}`,
      `Cliente: ${quote.client}`,
      '',
      itemsList,
      '',
      `Total: R$ ${formatCurrency(totalPriceWithDiscount)}`,
    ].join('\n');

    try {
      await Share.share({ message });
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao compartilhar orçamento');
    }
  }, [quote, totalPriceWithDiscount]);

  return { handleRemoveQuote, handleCopyQuote, handleShareQuote };
}
