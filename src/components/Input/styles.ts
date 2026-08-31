import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: colors.background,
    height: 48,
  },
  input: {
    fontSize: 16,
    color: colors.textSecondary,
    marginLeft: 8,
    flex: 1,
    height: '100%',
  },
});
