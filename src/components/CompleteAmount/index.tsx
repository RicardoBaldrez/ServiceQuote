import { View, Text } from 'react-native';

import { styles } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

export default function CompleteAmount({ amount }: { amount: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.currency}>R$</Text>
      <Text style={styles.amount}>{formatCurrency(amount)}</Text>
    </View>
  );
}
