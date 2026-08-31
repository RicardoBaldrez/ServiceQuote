import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  currency: {
    fontSize: 12,
    color: colors.textPrimary,
    marginBottom: 1,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
});
