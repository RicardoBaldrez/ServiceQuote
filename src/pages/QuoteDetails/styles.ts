import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
  },
  containerDetails: {
    padding: 20,
  },
  containerDetailsContent: {
    gap: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: colors.borderLight,
    padding: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerIconButtons: {
    flexDirection: 'row',
    gap: 1,
  },
});
