import { Text, View } from 'react-native';

import QuoteInfoIcon from '@/pages/QuoteDetails/components/QuoteInfoIcon';
import { Quote } from '@/types/quote';
import { formatDate } from '@/utils';

import { styles } from './styles';

type QuoteSummaryCardProps = {
  quote: Quote;
};

export default function QuoteSummaryCard({ quote }: QuoteSummaryCardProps) {
  return (
    <View style={styles.quoteInfoCard}>
      <View style={styles.quoteInfoHeader}>
        <QuoteInfoIcon icon="storefront" />
        <Text style={styles.quoteInfoTitle}>{quote.title}</Text>
      </View>
      <View style={styles.quoteInfoClient}>
        <Text style={styles.quoteTitleInfo}>Cliente</Text>
        <Text style={styles.quoteValueInfo}>{quote.client}</Text>
      </View>
      <View style={styles.quoteInfoDatesRow}>
        <View style={styles.quoteInfoDateItem}>
          <Text style={styles.quoteTitleInfo}>Criado em</Text>
          <Text style={styles.quoteValueInfo}>
            {formatDate(quote.createdAt)}
          </Text>
        </View>
        <View style={styles.quoteInfoDateItem}>
          <Text style={styles.quoteTitleInfo}>Atualizado em</Text>
          <Text style={styles.quoteValueInfo}>
            {formatDate(quote.updatedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}
