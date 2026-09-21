import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

  // ==========================================
  // TELA
  // ==========================================

  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },


  container: {
    flex: 1,
    paddingHorizontal: 20,
  },


  scrollContent: {
    paddingBottom: 25,
  },


  // ==========================================
  // HEADER
  // ==========================================

  header: {
    height: 70,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },


  backButton: {
    width: 44,
    height: 44,

    borderRadius: 13,

    backgroundColor: '#F7F7F9',

    alignItems: 'center',
    justifyContent: 'center',
  },


  title: {
    fontSize: 20,

    fontWeight: '800',

    color: '#18181D',
  },


  headerPlaceholder: {
    width: 44,
    height: 44,
  },


  // ==========================================
  // TÍTULOS
  // ==========================================

  sectionTitle: {
    fontSize: 17,

    fontWeight: '700',

    color: '#18181D',

    marginTop: 18,

    marginBottom: 15,
  },


  // ==========================================
  // CATEGORIAS
  // ==========================================

  options: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: 10,
  },


  option: {
    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,

    paddingVertical: 11,

    borderRadius: 10,

    borderWidth: 1,

    borderColor: '#E3E3E8',

    backgroundColor: '#FFF',

    maxWidth: '100%',
  },


  optionSelected: {
    backgroundColor: '#6847E8',

    borderColor: '#6847E8',
  },


  optionText: {
    fontSize: 13,

    color: '#666',

    marginLeft: 6,
  },


  optionTextSelected: {
    color: '#FFF',

    fontWeight: '700',
  },


  // ==========================================
  // ORDENAÇÃO
  // ==========================================

  radioRow: {
    flexDirection: 'row',

    alignItems: 'center',

    minHeight: 65,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#F1F1F3',
  },


  radio: {
    width: 21,
    height: 21,

    borderRadius: 11,

    borderWidth: 2,

    borderColor: '#D0D0D5',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },


  radioSelected: {
    borderColor: '#6847E8',
  },


  radioInner: {
    width: 11,
    height: 11,

    borderRadius: 6,

    backgroundColor: '#6847E8',
  },


  radioContent: {
    flex: 1,
  },


  radioText: {
    fontSize: 14,

    color: '#333',

    fontWeight: '600',
  },


  radioDescription: {
    fontSize: 11,

    color: '#999',

    marginTop: 3,
  },


  // ==========================================
  // LOADING
  // ==========================================

  loading: {
    height: 100,

    alignItems: 'center',

    justifyContent: 'center',
  },


  // ==========================================
  // APLICAR
  // ==========================================

  applyButton: {
    height: 55,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#6847E8',

    borderRadius: 14,

    marginTop: 25,

    marginBottom: 10,
  },


  applyText: {
    color: '#FFF',

    fontSize: 15,

    fontWeight: '700',

    marginLeft: 8,
  },

});

export default styles;



