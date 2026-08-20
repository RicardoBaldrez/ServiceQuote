import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    height: 240,
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  footerButtons: {
    flexDirection: 'row',
  },
  descriptionInput: {
    minHeight: 100,
    borderRadius: 16,
  },
  priceInputWrapper: {
    width: '67%',
  },
  quantityInputWrapper: {
    width: '30%',
  },
});
