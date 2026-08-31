import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contentItem: {
    marginTop: 20,
  },
  titleContent: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 16,
  },
  selectElement: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.checkboxBorder,
    marginRight: 12,
  },
  separator: {
    width: 12,
  },
  radioIcon: {
    marginRight: 8,
  },
  radioIconActive: {
    color: colors.primary,
  },
  radioIconInactive: {
    color: colors.textMuted,
  },
});
