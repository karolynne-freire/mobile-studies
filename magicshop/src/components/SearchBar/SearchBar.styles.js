import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  searchContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
    borderRadius: 12,
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#222',
    marginLeft: 8,
  },

  filterButton: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1EDFF',
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#DED6FF',
  },

  filterText: {
    marginLeft: 7,
    fontSize: 13,
    fontWeight: '700',
    color: '#6847E8',
  },
});

export default styles;

