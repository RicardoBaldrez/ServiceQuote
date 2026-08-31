import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import CompleteAmount from '@/components/CompleteAmount';
import Input from '@/components/Input';

import { formatCurrency } from '@/utils';

import { styles } from './styles';

type InvestmentSummaryProps = {
  itemCount: number;
  totalPrice: number;
  totalDiscount: number;
  totalPriceWithDiscount: number;
  discountPct: string;
  onDiscountChangeText: (text: string) => void;
};

export default function InvestmentSummary({
  itemCount,
  totalPrice,
  totalDiscount,
  totalPriceWithDiscount,
  discountPct,
  onDiscountChangeText,
}: InvestmentSummaryProps) {
  return (
    <>
      <View style={styles.investmentRow}>
        <Text>Subtotal </Text>
        <View style={styles.investmentSubtotalMeta}>
          <Text style={styles.investmentItemsCount}>{itemCount} itens</Text>
          <Text style={styles.investmentSubtotalValue}>
            R$ {formatCurrency(totalPrice)}
          </Text>
        </View>
      </View>
      <View style={styles.discountRow}>
        <View style={styles.discountField}>
          <Text>Desconto</Text>
          <View style={styles.discountInputWrapper}>
            <Input
              placeholder=""
              hasIcon
              value={discountPct}
              onChangeText={onDiscountChangeText}
              keyboardType="numeric"
              icon={
                <MaterialIcons
                  name="percent"
                  size={14}
                  color="black"
                  style={styles.percentIcon}
                />
              }
            />
          </View>
        </View>
        {totalDiscount > 0 && (
          <Text style={styles.discountValue}>
            -R$ {formatCurrency(totalDiscount)}
          </Text>
        )}
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Valor total</Text>
        <View>
          {totalDiscount > 0 && (
            <Text style={styles.totalStrikethrough}>
              R$ {formatCurrency(totalPrice)}
            </Text>
          )}
          <CompleteAmount amount={totalPriceWithDiscount} />
        </View>
      </View>
    </>
  );
}
