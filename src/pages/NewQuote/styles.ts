import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: {
    color: '#0F0F0F',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionContent: {
    padding: 16,
    gap: 12,
  },
  statusList: {
    padding: 16,
    gap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  statusOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginRight: 20,
  },
  statusRadioIcon: {
    marginRight: 8,
  },
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
    alignItems: 'center',
  },
  serviceTitle: {
    color: '#0F0F0F',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
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
  addServiceButton: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E6E5E5',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  investmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  investmentSubtotalMeta: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
  },
  investmentItemsCount: {
    color: '#4A4A4A',
    fontSize: 12,
  },
  investmentSubtotalValue: {
    color: '#0F0F0F',
    fontSize: 14,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  discountField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '50%',
  },
  discountInputWrapper: {
    flex: 1,
  },
  percentIcon: {
    marginRight: 8,
  },
  discountValue: {
    color: '#DB4D4D',
    fontSize: 14,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FAFAFA',
    marginTop: 20,
  },
  totalLabel: {
    fontWeight: 'bold',
    color: '#0F0F0F',
    fontSize: 14,
  },
  totalStrikethrough: {
    textDecorationLine: 'line-through',
    color: '#676767',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
});
