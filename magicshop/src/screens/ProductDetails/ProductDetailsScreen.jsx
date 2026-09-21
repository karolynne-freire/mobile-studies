import { useEffect, useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  getProductById,
} from '../../services/api';

import styles from './ProductDetailsScreen.styles';

export default function ProductDetailsScreen({
  route,
  navigation,
}) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reviewsVisible, setReviewsVisible] =
    useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      const data =
        await getProductById(productId);

      setProduct(data);
    } catch (error) {
      console.log(
        'Erro ao buscar produto:',
        error
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color="#6847E8"
          />
        </View>
      </SafeAreaView>
    );
  }

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loading}>
          <Text>
            Produto não encontrado.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          {/* HEADER DA IMAGEM */}
          <View style={styles.imageContainer}>

            <Image
              source={{
                uri: product.images?.[0],
              }}
              style={styles.image}
            />

            {/* Botão voltar */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() =>
                navigation.goBack()
              }
              activeOpacity={0.8}
            >
              <Ionicons
                name="arrow-back"
                size={21}
                color="#18181D"
              />
            </TouchableOpacity>

            {/* Favorito */}
            <TouchableOpacity
              style={styles.favoriteButton}
              activeOpacity={0.8}
              onPress={() => {
                console.log(
                  'Favoritar produto'
                );
              }}
            >
              <Ionicons
                name="heart-outline"
                size={21}
                color="#6847E8"
              />
            </TouchableOpacity>

          </View>


          {/* CONTEÚDO */}
          <View style={styles.content}>

            <Text style={styles.category}>
              {product.category}
            </Text>

            <Text style={styles.title}>
              {product.title}
            </Text>


            {/* AVALIAÇÃO */}
            <TouchableOpacity
              style={styles.ratingContainer}
              onPress={() =>
                setReviewsVisible(true)
              }
              activeOpacity={0.7}
            >
              <View style={styles.ratingStars}>
                <Ionicons
                  name="star"
                  size={16}
                  color="#E5A000"
                />

                <Text style={styles.rating}>
                  {product.rating}
                </Text>
              </View>

              <Text style={styles.reviewLink}>
                Ver avaliações
              </Text>

              <Ionicons
                name="chevron-forward"
                size={16}
                color="#999"
              />
            </TouchableOpacity>


            {/* ESTOQUE */}
            <View style={styles.stockContainer}>
              <Ionicons
                name="cube-outline"
                size={16}
                color="#6847E8"
              />

              <Text style={styles.stock}>
                {product.stock} em estoque
              </Text>
            </View>


            {/* PREÇO */}
            <Text style={styles.price}>
              R$ {product.price.toFixed(2)}
            </Text>


            {/* DESCRIÇÃO */}
            <Text style={styles.descriptionTitle}>
              Descrição
            </Text>

            <Text style={styles.description}>
              {product.description}
            </Text>


            {/* INFORMAÇÕES */}
            <Text style={styles.descriptionTitle}>
              Informações
            </Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>
                Marca
              </Text>

              <Text style={styles.infoValue}>
                {product.brand ||
                  'Não informado'}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>
                Desconto
              </Text>

              <Text style={styles.infoValue}>
                {product.discountPercentage}%
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>
                Avaliação
              </Text>

              <Text style={styles.infoValue}>
                {product.rating}
              </Text>
            </View>


            {/* CARRINHO */}
            <TouchableOpacity
              style={styles.cartButton}
              activeOpacity={0.8}
            >
              <Ionicons
                name="cart-outline"
                size={21}
                color="#FFF"
              />

              <Text
                style={styles.cartButtonText}
              >
                Adicionar ao carrinho
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>


      {/* MODAL DE AVALIAÇÕES */}
      <Modal
        visible={reviewsVisible}
        animationType="slide"
        transparent
        onRequestClose={() =>
          setReviewsVisible(false)
        }
      >
        <View style={styles.modalOverlay}>

          <View style={styles.reviewsModal}>

            {/* Header */}
            <View style={styles.reviewsHeader}>

              <View>
                <Text
                  style={styles.reviewsTitle}
                >
                  Avaliações
                </Text>

                <View
                  style={styles.overallRating}
                >
                  <Ionicons
                    name="star"
                    size={18}
                    color="#E5A000"
                  />

                  <Text
                    style={
                      styles.overallRatingText
                    }
                  >
                    {product.rating}
                  </Text>

                  <Text
                    style={
                      styles.reviewCount
                    }
                  >
                    ({product.reviews?.length || 0})
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  setReviewsVisible(false)
                }
                style={styles.closeButton}
              >
                <Ionicons
                  name="close"
                  size={22}
                  color="#18181D"
                />
              </TouchableOpacity>

            </View>


            {/* Lista de avaliações */}
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              {product.reviews?.length > 0 ? (
                product.reviews.map(
                  (review, index) => (
                    <View
                      key={index}
                      style={styles.review}
                    >

                      <View
                        style={
                          styles.reviewTop
                        }
                      >
                        <View
                          style={
                            styles.avatar
                          }
                        >
                          <Text
                            style={
                              styles.avatarText
                            }
                          >
                            {review.reviewerName
                              ?.charAt(0)
                              .toUpperCase()}
                          </Text>
                        </View>

                        <View
                          style={
                            styles.reviewerInfo
                          }
                        >
                          <Text
                            style={
                              styles.reviewerName
                            }
                          >
                            {review.reviewerName}
                          </Text>

                          <Text
                            style={
                              styles.reviewerEmail
                            }
                          >
                            {review.reviewerEmail}
                          </Text>
                        </View>

                        <View
                          style={
                            styles.reviewRating
                          }
                        >
                          <Ionicons
                            name="star"
                            size={13}
                            color="#E5A000"
                          />

                          <Text
                            style={
                              styles.reviewRatingText
                            }
                          >
                            {review.rating}
                          </Text>
                        </View>
                      </View>

                      <Text
                        style={styles.reviewComment}
                      >
                        {review.comment}
                      </Text>

                      <Text
                        style={styles.reviewDate}
                      >
                        {review.date
                          ? new Date(
                              review.date
                            ).toLocaleDateString(
                              'pt-BR'
                            )
                          : ''}
                      </Text>

                    </View>
                  )
                )
              ) : (
                <View
                  style={styles.noReviews}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={30}
                    color="#AAA"
                  />

                  <Text
                    style={styles.noReviewsText}
                  >
                    Nenhuma avaliação encontrada.
                  </Text>
                </View>
              )}
            </ScrollView>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
