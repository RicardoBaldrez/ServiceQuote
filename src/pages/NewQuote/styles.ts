import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  backButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  sectionContent: {
    padding: 16,
    gap: 12,
  },
  addServiceButton: {
    width: '90%',
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderColor: colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
});
