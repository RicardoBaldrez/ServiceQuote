import { View, Text } from 'react-native';

import { formatCurrency } from '@/utils';

import { styles } from './styles';

export default function CompleteAmount({ amount }: { amount: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>R$</Text>
      <Text style={styles.amount}>{formatCurrency(amount)}</Text>
    </View>
  );
}
