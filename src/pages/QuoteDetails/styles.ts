import { StyleSheet } from 'react-native';

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
  quoteInfoCard: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  quoteInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  quoteInfoIcon: {
    backgroundColor: '#DFDAF2',
    borderRadius: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F0F0F',
    width: '80%',
  },
  quoteInfoClient: {
    padding: 20,
  },
  quoteInfoDatesRow: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  quoteInfoDateItem: {
    flex: 1,
  },
  quoteTitleInfo: {
    fontSize: 12,
    color: '#4A4A4A',
    marginBottom: 4,
  },
  quoteValueInfo: {
    fontSize: 14,
    color: '#0F0F0F',
  },
  totalsContainer: {
    backgroundColor: '#FAFAFA',
    alignItems: 'flex-start',
    padding: 20,
  },
  totalsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 16,
  },
  totalsContent: {
    flex: 1,
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  subtotalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subtotalValueStrikethrough: {
    textDecorationLine: 'line-through',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    paddingVertical: 8,
  },
  discountLabelWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  discountBadge: {
    fontSize: 12,
    color: '#30752F',
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: '#BFF7BE',
    borderRadius: 4,
  },
  discountValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#30752F',
  },
  totalRow: {
    marginTop: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 14,
    color: '#0F0F0F',
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
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
