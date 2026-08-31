import { StyleSheet } from 'react-native';

import { StatusColors, StatusType } from '@/components/Status/types';

import { colors } from '@/theme/colors';

const approvedColors = StatusColors[StatusType.Approved];

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
  quoteInfoIcon: {
    backgroundColor: colors.primaryTint,
    borderRadius: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: approvedColors.text,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: approvedColors.background,
    borderRadius: 4,
  },
  discountValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: approvedColors.text,
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
