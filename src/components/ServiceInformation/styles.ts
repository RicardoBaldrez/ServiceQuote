import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  serviceRow: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceContent: {
    flex: 1,
  },
  serviceRowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceTitle: {
    color: '#0F0F0F',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    width: '70%',
  },
  servicePrice: {
    color: '#0F0F0F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceDescription: {
    color: '#676767',
    fontSize: 12,
  },
  serviceQuantity: {
    color: '#4A4A4A',
    fontSize: 12,
  },
  serviceEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
