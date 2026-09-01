import { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryList from '../../components/CategoryList/CategoryList';
import ProductCard from '../../components/ProductCard/ProductCard';
import BottomTab from '../../components/BottomTab/BottomTab';

import {
  getProducts,
  getCategories,
  getProductsByCategory,
  searchProducts,
} from '../../services/api';

import styles from './ProductsScreen.styles';

export default function ProductsScreen({
  navigation,
  route,
}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const filterCategory =
    route.params?.category || 'all';

  const filterOrder =
    route.params?.order || 'popular';


  useEffect(() => {
    loadInitialData();
  }, [filterCategory, filterOrder]);


  async function loadInitialData() {
    try {
      setLoading(true);

      // Busca categorias
      const categoriesData =
        await getCategories();

      setCategories(categoriesData);

      // Mantém a categoria selecionada
      if (
        filterCategory &&
        filterCategory !== 'all'
      ) {
        setSelectedCategory(filterCategory);
      } else {
        setSelectedCategory(null);
      }

      // Busca produtos
      let data;

      if (
        filterCategory &&
        filterCategory !== 'all'
      ) {
        data =
          await getProductsByCategory(
            filterCategory
          );
      } else {
        data = await getProducts();
      }

      // Ordena os produtos
      const sortedProducts =
        sortProducts(data.products);

      setProducts(sortedProducts);

    } catch (error) {
      console.log(
        'Erro ao carregar dados:',
        error
      );
    } finally {
      setLoading(false);
    }
  }

  function sortProducts(productsList) {
    const productsCopy = [
      ...productsList,
    ];

    // Mais populares
    if (filterOrder === 'popular') {
      productsCopy.sort(
        (a, b) =>
          b.rating - a.rating
      );
    }

    // Menor preço
    if (filterOrder === 'priceAsc') {
      productsCopy.sort(
        (a, b) =>
          a.price - b.price
      );
    }

    // Maior preço
    if (filterOrder === 'priceDesc') {
      productsCopy.sort(
        (a, b) =>
          b.price - a.price
      );
    }

    return productsCopy;
  }


  async function handleCategory(category) {
    try {
      setSelectedCategory(category);
      setLoading(true);

      let data;

      // Todos
      if (!category) {
        data = await getProducts();
      }

      // Categoria específica
      else {
        data =
          await getProductsByCategory(
            category
          );
      }

      // Aplica a ordenação atual
      const sortedProducts =
        sortProducts(data.products);

      setProducts(sortedProducts);

    } catch (error) {
      console.log(
        'Erro ao buscar categoria:',
        error
      );
    } finally {
      setLoading(false);
    }
  }


  async function handleSearch(text) {
    setSearch(text);

    try {
      setLoading(true);

      // Se apagou a busca
      if (!text.trim()) {
        let data;

        if (
          selectedCategory
        ) {
          data =
            await getProductsByCategory(
              selectedCategory
            );
        } else {
          data = await getProducts();
        }

        const sortedProducts =
          sortProducts(data.products);

        setProducts(sortedProducts);

        return;
      }

      // Busca na API
      const data =
        await searchProducts(text);

      const sortedProducts =
        sortProducts(data.products);

      setProducts(sortedProducts);

    } catch (error) {
      console.log(
        'Erro na busca:',
        error
      );
    } finally {
      setLoading(false);
    }
  }


  function handleProductPress(product) {
    navigation.navigate(
      'ProductDetails',
      {
        productId: product.id,
      }
    );
  }


  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <View style={styles.container}>

        <View style={styles.header}>

          {/* NOTIFICAÇÕES */}
          <TouchableOpacity
            style={[
              styles.headerButton,
              styles.headerButtonLeft,
            ]}
            activeOpacity={0.7}
            onPress={() => {
              console.log(
                'Notificações'
              );
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={23}
              color="#18181D"
            />
          </TouchableOpacity>


          {/* CENTRO */}
          <View
            style={styles.headerCenter}
          >
            <Text style={styles.title}>
              MagicShop
            </Text>

            <Text style={styles.subtitle}>
              Encontre seus produtos favoritos
            </Text>
          </View>


          {/* MENU */}
          <TouchableOpacity
            style={[
              styles.headerButton,
              styles.headerButtonRight,
            ]}
            activeOpacity={0.7}
            onPress={() => {
              console.log(
                'Menu'
              );
            }}
          >
            <Ionicons
              name="menu-outline"
              size={27}
              color="#18181D"
            />
          </TouchableOpacity>

        </View>


        <SearchBar
          value={search}
          onChangeText={handleSearch}
          onFilterPress={() =>
            navigation.navigate('Filters')
          }
        />

        <CategoryList
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          onSelect={handleCategory}
        />


        <Text style={styles.sectionTitle}>
          Produtos em destaque
        </Text>




        {loading ? (
          <View style={styles.loading}>

            <ActivityIndicator
              size="large"
              color="#6847E8"
            />

          </View>
        ) : (
          <FlatList
            data={products}

            keyExtractor={(item) =>
              item.id.toString()
            }

            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() =>
                  handleProductPress(item)
                }
              />
            )}

            showsVerticalScrollIndicator={
              false
            }

            contentContainerStyle={
              styles.list
            }

            ListEmptyComponent={
              <View style={styles.empty}>

                <Ionicons
                  name="search-outline"
                  size={45}
                  color="#CCC"
                />

                <Text
                  style={styles.emptyTitle}
                >
                  Nenhum produto encontrado
                </Text>

                <Text
                  style={styles.emptyText}
                >
                  Tente buscar por outro termo.
                </Text>

              </View>
            }
          />
        )}


        <BottomTab
          navigation={navigation}
          active="products"
        />

      </View>
    </SafeAreaView>
  );
}

