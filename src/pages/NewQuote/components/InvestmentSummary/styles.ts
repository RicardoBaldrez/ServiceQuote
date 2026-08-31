import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  investmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  investmentSubtotalMeta: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
  },
  investmentItemsCount: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  investmentSubtotalValue: {
    color: colors.textPrimary,
    fontSize: 14,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  discountField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '50%',
  },
  discountInputWrapper: {
    flex: 1,
  },
  percentIcon: {
    marginRight: 8,
  },
  discountValue: {
    color: colors.danger,
    fontSize: 14,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.background,
    marginTop: 20,
  },
  totalLabel: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontSize: 14,
  },
  totalStrikethrough: {
    textDecorationLine: 'line-through',
    color: colors.textMuted,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});
