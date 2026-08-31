import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: 48,
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  roundedLabel: {
    borderRadius: 9999,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
  },
  secondaryContainer: {
    backgroundColor: colors.background,
  },
  secondaryLabel: {
    color: colors.primary,
  },
});
