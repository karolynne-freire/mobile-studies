import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,

    backgroundColor: '#FFF',
  },


  container: {
    paddingBottom: 30,
  },


  // =========================
  // IMAGEM / HEADER
  // =========================

  imageContainer: {
    position: 'relative',

    width: '100%',
    height: 330,

    backgroundColor: '#F7F7F9',
  },

  image: {
    width: '100%',
    height: '100%',

    resizeMode: 'contain',
  },


  backButton: {
    position: 'absolute',

    top: 18,
    left: 18,

    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: '#FFF',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,

    shadowRadius: 5,
  },


  favoriteButton: {
    position: 'absolute',

    top: 18,
    right: 18,

    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: '#FFF',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,

    shadowRadius: 5,
  },


  // =========================
  // CONTEÚDO
  // =========================

  content: {
    padding: 20,
  },


  category: {
    fontSize: 12,

    color: '#6847E8',

    textTransform: 'capitalize',

    fontWeight: '600',
  },


  title: {
    fontSize: 25,

    color: '#18181D',

    fontWeight: '800',

    marginTop: 5,
  },


  // =========================
  // RATING
  // =========================

  ratingContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    alignSelf: 'flex-start',

    marginTop: 12,
  },


  ratingStars: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  rating: {
    color: '#E5A000',

    fontWeight: '700',

    fontSize: 14,

    marginLeft: 5,
  },


  reviewLink: {
    color: '#6847E8',

    fontSize: 12,

    fontWeight: '600',

    marginLeft: 12,
  },


  // =========================
  // ESTOQUE
  // =========================

  stockContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 10,
  },


  stock: {
    color: '#888',

    fontSize: 12,

    marginLeft: 6,
  },


  // =========================
  // PREÇO
  // =========================

  price: {
    fontSize: 26,

    fontWeight: '800',

    color: '#6847E8',

    marginTop: 18,
  },


  // =========================
  // DESCRIÇÃO
  // =========================

  descriptionTitle: {
    fontSize: 17,

    fontWeight: '700',

    color: '#18181D',

    marginTop: 25,

    marginBottom: 8,
  },


  description: {
    fontSize: 14,

    lineHeight: 22,

    color: '#777',
  },


  // =========================
  // INFORMAÇÕES
  // =========================

  infoRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#F0F0F0',
  },


  infoLabel: {
    color: '#888',

    fontSize: 13,
  },


  infoValue: {
    color: '#222',

    fontSize: 13,

    fontWeight: '600',
  },


  // =========================
  // CARRINHO
  // =========================

  cartButton: {
    height: 55,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#6847E8',

    borderRadius: 14,

    marginTop: 25,
  },


  cartButtonText: {
    color: '#FFF',

    fontSize: 15,

    fontWeight: '700',

    marginLeft: 8,
  },


  // =========================
  // LOADING
  // =========================

  loading: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },


  // =========================
  // MODAL
  // =========================

  modalOverlay: {
    flex: 1,

    justifyContent: 'flex-end',

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },


  reviewsModal: {
    height: '75%',

    backgroundColor: '#FFF',

    borderTopLeftRadius: 25,

    borderTopRightRadius: 25,

    padding: 20,
  },


  reviewsHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 15,
  },


  reviewsTitle: {
    fontSize: 21,

    fontWeight: '800',

    color: '#18181D',
  },


  overallRating: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,
  },


  overallRatingText: {
    fontSize: 14,

    fontWeight: '700',

    color: '#E5A000',

    marginLeft: 5,
  },


  reviewCount: {
    fontSize: 12,

    color: '#999',

    marginLeft: 4,
  },


  closeButton: {
    width: 40,
    height: 40,

    borderRadius: 12,

    backgroundColor: '#F5F5F7',

    alignItems: 'center',
    justifyContent: 'center',
  },


  // =========================
  // REVIEW
  // =========================

  review: {
    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#F0F0F0',
  },


  reviewTop: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  avatar: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#EDE8FF',

    alignItems: 'center',
    justifyContent: 'center',
  },


  avatarText: {
    color: '#6847E8',

    fontSize: 15,

    fontWeight: '800',
  },


  reviewerInfo: {
    flex: 1,

    marginLeft: 10,
  },


  reviewerName: {
    fontSize: 13,

    fontWeight: '700',

    color: '#18181D',
  },


  reviewerEmail: {
    fontSize: 10,

    color: '#999',

    marginTop: 2,
  },


  reviewRating: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  reviewRatingText: {
    fontSize: 12,

    fontWeight: '700',

    color: '#E5A000',

    marginLeft: 3,
  },


  reviewComment: {
    fontSize: 13,

    lineHeight: 19,

    color: '#666',

    marginTop: 10,
  },


  reviewDate: {
    fontSize: 10,

    color: '#AAA',

    marginTop: 7,
  },


  noReviews: {
    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 40,
  },


  noReviewsText: {
    color: '#999',

    marginTop: 10,

    fontSize: 13,
  },

});

export default styles;

