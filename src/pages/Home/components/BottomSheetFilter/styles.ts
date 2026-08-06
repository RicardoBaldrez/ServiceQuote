import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    zIndex: 1000,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F0F0F',
  },
  content: {
    padding: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contentItem: {
    marginBottom: 20,
  },
  titleContent: {
    fontSize: 12,
    color: '#676767',
    marginBottom: 16,
  },
  selectElement: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A1A2A1',
    marginRight: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  separator: {
    width: 12,
  },
});
