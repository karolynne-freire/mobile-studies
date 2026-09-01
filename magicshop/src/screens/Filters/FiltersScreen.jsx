import { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  getCategories,
} from '../../services/api';

import styles from './FiltersScreen.styles';

export default function FiltersScreen({
  navigation,
  route,
}) {
  const [categories, setCategories] =
    useState([]);

  const [selectedOrder, setSelectedOrder] =
    useState(
      route.params?.order || 'popular'
    );

  const [selectedCategory, setSelectedCategory] =
    useState(
      route.params?.category || 'all'
    );

  const [loading, setLoading] =
    useState(true);


  // ==========================================
  // CARREGAR CATEGORIAS
  // ==========================================

  useEffect(() => {
    loadCategories();
  }, []);


  async function loadCategories() {
    try {
      const data =
        await getCategories();

      setCategories(data);
    } catch (error) {
      console.log(
        'Erro ao carregar categorias:',
        error
      );
    } finally {
      setLoading(false);
    }
  }


  // ==========================================
  // APLICAR FILTROS
  // ==========================================

  function applyFilters() {
    navigation.navigate('Products', {
      category: selectedCategory,
      order: selectedOrder,
    });
  }


  // ==========================================
  // SELECIONAR CATEGORIA
  // ==========================================

  function selectCategory(category) {
    setSelectedCategory(category);
  }


  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >

      <View style={styles.container}>

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
              navigation.goBack()
            }
            activeOpacity={0.7}
          >
            <Ionicons
              name="arrow-back"
              size={21}
              color="#18181D"
            />
          </TouchableOpacity>


          <Text style={styles.title}>
            Filtros
          </Text>


          <View
            style={styles.headerPlaceholder}
          />

        </View>


        {/* ================================= */}
        {/* CONTEÚDO */}
        {/* ================================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.scrollContent
          }
        >

          {/* ================================= */}
          {/* CATEGORIAS */}
          {/* ================================= */}

          <Text style={styles.sectionTitle}>
            Categorias
          </Text>


          {loading ? (

            <View style={styles.loading}>

              <ActivityIndicator
                size="small"
                color="#6847E8"
              />

            </View>

          ) : (

            <View style={styles.options}>

              {/* TODOS */}

              <TouchableOpacity
                style={[
                  styles.option,
                  selectedCategory === 'all' &&
                    styles.optionSelected,
                ]}
                onPress={() =>
                  selectCategory('all')
                }
                activeOpacity={0.7}
              >

                <Ionicons
                  name="grid-outline"
                  size={16}
                  color={
                    selectedCategory === 'all'
                      ? '#FFF'
                      : '#666'
                  }
                />

                <Text
                  style={[
                    styles.optionText,
                    selectedCategory === 'all' &&
                      styles.optionTextSelected,
                  ]}
                >
                  Todos
                </Text>

              </TouchableOpacity>


              {/* CATEGORIAS DA API */}

              {categories.map(
                (category) => {

                  const selected =
                    selectedCategory ===
                    category.slug;

                  return (
                    <TouchableOpacity
                      key={category.slug}
                      style={[
                        styles.option,
                        selected &&
                          styles.optionSelected,
                      ]}
                      onPress={() =>
                        selectCategory(
                          category.slug
                        )
                      }
                      activeOpacity={0.7}
                    >

                      <Text
                        style={[
                          styles.optionText,
                          selected &&
                            styles.optionTextSelected,
                        ]}
                      >
                        {category.name}
                      </Text>

                    </TouchableOpacity>
                  );
                }
              )}

            </View>
          )}


          {/* ================================= */}
          {/* ORDENAÇÃO */}
          {/* ================================= */}

          <Text style={styles.sectionTitle}>
            Ordenação
          </Text>


          {/* MAIS POPULARES */}

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() =>
              setSelectedOrder('popular')
            }
            activeOpacity={0.7}
          >

            <View
              style={[
                styles.radio,
                selectedOrder === 'popular' &&
                  styles.radioSelected,
              ]}
            >

              {selectedOrder === 'popular' && (
                <View
                  style={styles.radioInner}
                />
              )}

            </View>


            <View style={styles.radioContent}>

              <Text style={styles.radioText}>
                Mais populares
              </Text>

              <Text
                style={styles.radioDescription}
              >
                Produtos com melhor avaliação
              </Text>

            </View>


            <Ionicons
              name="trending-up-outline"
              size={20}
              color="#6847E8"
            />

          </TouchableOpacity>


          {/* MENOR PREÇO */}

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() =>
              setSelectedOrder('priceAsc')
            }
            activeOpacity={0.7}
          >

            <View
              style={[
                styles.radio,
                selectedOrder === 'priceAsc' &&
                  styles.radioSelected,
              ]}
            >

              {selectedOrder === 'priceAsc' && (
                <View
                  style={styles.radioInner}
                />
              )}

            </View>


            <View style={styles.radioContent}>

              <Text style={styles.radioText}>
                Menor preço
              </Text>

              <Text
                style={styles.radioDescription}
              >
                Do mais barato ao mais caro
              </Text>

            </View>


            <Ionicons
              name="arrow-down-outline"
              size={20}
              color="#6847E8"
            />

          </TouchableOpacity>


          {/* MAIOR PREÇO */}

          <TouchableOpacity
            style={styles.radioRow}
            onPress={() =>
              setSelectedOrder('priceDesc')
            }
            activeOpacity={0.7}
          >

            <View
              style={[
                styles.radio,
                selectedOrder === 'priceDesc' &&
                  styles.radioSelected,
              ]}
            >

              {selectedOrder === 'priceDesc' && (
                <View
                  style={styles.radioInner}
                />
              )}

            </View>


            <View style={styles.radioContent}>

              <Text style={styles.radioText}>
                Maior preço
              </Text>

              <Text
                style={styles.radioDescription}
              >
                Do mais caro ao mais barato
              </Text>

            </View>


            <Ionicons
              name="arrow-up-outline"
              size={20}
              color="#6847E8"
            />

          </TouchableOpacity>


          {/* ================================= */}
          {/* APLICAR */}
          {/* ================================= */}

          <TouchableOpacity
            style={styles.applyButton}
            onPress={applyFilters}
            activeOpacity={0.8}
          >

            <Ionicons
              name="checkmark-circle-outline"
              size={21}
              color="#FFF"
            />

            <Text style={styles.applyText}>
              Aplicar filtros
            </Text>

          </TouchableOpacity>

        </ScrollView>

      </View>

    </SafeAreaView>
  );
}



