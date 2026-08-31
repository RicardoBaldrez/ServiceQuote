import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  totalsContainer: {
    backgroundColor: colors.background,
    alignItems: 'flex-start',
    padding: 20,
  },
  totalsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 16,
  },
  totalsContent: {
    flex: 1,
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  subtotalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  subtotalValueStrikethrough: {
    textDecorationLine: 'line-through',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
    paddingVertical: 8,
  },
  discountLabelWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  discountBadge: {
    fontSize: 12,
    color: colors.success,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: colors.successTint,
    borderRadius: 4,
  },
  discountValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.success,
  },
  totalRow: {
    marginTop: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
});
