import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  quoteInfoCard: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 10,
    backgroundColor: colors.background,
  },
  quoteInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  quoteInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    width: '80%',
  },
  quoteInfoClient: {
    padding: 20,
  },
  quoteInfoDatesRow: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  quoteInfoDateItem: {
    flex: 1,
  },
  quoteTitleInfo: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  quoteValueInfo: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
