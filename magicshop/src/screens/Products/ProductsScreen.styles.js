import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,

    backgroundColor: '#ffffff',
  },


  container: {
    flex: 1,
    paddingHorizontal: 18,
  },

  header: {
    height: 95,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },


  headerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },


  headerButton: {
    position: 'absolute',
    top: 18,
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },


  headerButtonLeft: {
    left: 0,
  },


  headerButtonRight: {
    right: 0,
  },


  title: {
    fontSize: 24,

    fontWeight: '800',

    color: '#18181D',
  },


  subtitle: {
    fontSize: 12,

    color: '#999',

    marginTop: 4,

    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 17,

    fontWeight: '700',

    color: '#18181D',

    marginTop: 8,

    marginBottom: 10,
  },

  loading: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },

  list: {
    paddingBottom: 10,
  },

});

export default styles;
