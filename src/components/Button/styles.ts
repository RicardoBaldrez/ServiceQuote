import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#6A46Eb',
    borderRadius: 999,
    height: 48,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  roundedLabel: {
    borderRadius: 9999,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E6E5E5',
    marginRight: 8,
  },
});
