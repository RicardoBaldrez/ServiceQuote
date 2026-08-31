import { Text, View } from 'react-native';

import CompleteAmount from '@/components/CompleteAmount';

import QuoteInfoIcon from '@/pages/QuoteDetails/components/QuoteInfoIcon';
import { formatCurrency } from '@/utils';

import { styles } from './styles';

type QuoteTotalsCardProps = {
  totalPrice: number;
  totalDiscount: number;
  totalPriceWithDiscount: number;
  discountPct: string;
  hasDiscount: boolean;
};

export default function QuoteTotalsCard({
  totalPrice,
  totalDiscount,
  totalPriceWithDiscount,
  discountPct,
  hasDiscount,
}: QuoteTotalsCardProps) {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.totalsRow}>
        <QuoteInfoIcon icon="attach-money" />
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
                  <Text style={styles.discountBadge}>{discountPct}% off</Text>
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
  );
}
