import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: 90,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF',

    borderWidth: 1,
    borderColor: '#EEEEF2',

    borderRadius: 14,

    padding: 10,

    marginBottom: 10,
  },

  image: {
    width: 70,
    height: 70,

    borderRadius: 10,

    backgroundColor: '#F5F5F5',
  },

  info: {
    flex: 1,

    marginLeft: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: '700',

    color: '#18181D',
  },

  category: {
    fontSize: 11,

    color: '#999',

    marginTop: 3,
  },

  bottom: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 6,
  },

  price: {
    fontSize: 14,

    color: '#6847E8',

    fontWeight: '700',
  },

  rating: {
    fontSize: 11,

    color: '#E9A400',

    marginLeft: 10,
  },

  arrow: {
    fontSize: 26,

    color: '#AAA',

    marginLeft: 5,
  },
});

export default styles;
