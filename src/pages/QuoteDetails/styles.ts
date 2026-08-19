import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pressableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerContentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  containerDetails: {
    padding: 20,
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
    padding: 8,
    borderRadius: 8,
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
});
