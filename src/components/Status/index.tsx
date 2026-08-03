import { View, Text } from 'react-native';

import { styles } from './styles';
import { StatusColors, StatusType } from './types';

export default function Status({ status }: { status: StatusType }) {
  const statusColors = StatusColors[status];

  return (
    <View
      style={[styles.container, { backgroundColor: statusColors.background }]}
    >
      <View style={[styles.status, { backgroundColor: statusColors.dot }]} />
      <Text style={[styles.statusText, { color: statusColors.text }]}>
        {status}
      </Text>
    </View>
  );
}
