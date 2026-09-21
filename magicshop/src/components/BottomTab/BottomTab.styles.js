import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEF2',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },

  label: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },

  active: {
    color: '#6847E8',

    fontWeight: '700',
  },
});

export default styles;


