import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#BFF7BE',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#4BB84A',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#30752F',
  },
});
