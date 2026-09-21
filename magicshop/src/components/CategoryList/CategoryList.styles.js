import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 20,
    gap: 5,
  },

  category: {
    width: 72,
    alignItems: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,

    borderRadius: 13,

    backgroundColor: '#F4F4F7',

    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainerSelected: {
    backgroundColor: '#6847E8',
  },

  icon: {
    fontSize: 22,
    color: '#777',
  },

  iconSelected: {
    color: '#FFF',
  },

  name: {
    marginTop: 6,

    fontSize: 11,
    color: '#777',

    textAlign: 'center',
  },

  nameSelected: {
    color: '#6847E8',
    fontWeight: '700',
  },
});

export default styles;
