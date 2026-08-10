import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F0F0F',
    width: '70%',
  },
  description: {
    color: '#4A4A4A',
    fontSize: 14,
    fontWeight: '400',
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F0F0F',
    marginLeft: 6,
  },
});
