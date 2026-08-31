import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  serviceRow: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceContent: {
    flex: 1,
  },
  serviceRowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    width: '70%',
  },
  servicePrice: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceDescription: {
    color: colors.textMuted,
    fontSize: 12,
  },
  serviceQuantity: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  serviceEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
