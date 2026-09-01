import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import categoryIcons from '../../constants/categoryIcons';

import styles from './CategoryList.styles';

export default function CategoryList({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      
      {/* TODOS */}
      <TouchableOpacity
        style={styles.category}
        onPress={() => onSelect(null)}
      >
        <View
          style={[
            styles.iconContainer,
            selectedCategory === null &&
              styles.iconContainerSelected,
          ]}
        >
          <Ionicons
            name="grid-outline"
            size={21}
            color={
              selectedCategory === null
                ? '#FFF'
                : '#777'
            }
          />
        </View>

        <Text
          style={[
            styles.name,
            selectedCategory === null &&
              styles.nameSelected,
          ]}
        >
          Todos
        </Text>
      </TouchableOpacity>


      {/* CATEGORIAS DA API */}
      {categories.map((category) => {
        const selected =
          selectedCategory === category.slug;

        const iconName =
          categoryIcons[category.slug] ||
          'grid-outline';

        return (
          <TouchableOpacity
            key={category.slug}
            style={styles.category}
            onPress={() =>
              onSelect(category.slug)
            }
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                selected &&
                  styles.iconContainerSelected,
              ]}
            >
              <Ionicons
                name={iconName}
                size={21}
                color={
                  selected
                    ? '#FFF'
                    : '#777'
                }
              />
            </View>

            <Text
              style={[
                styles.name,
                selected &&
                  styles.nameSelected,
              ]}
              numberOfLines={1}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}

    </ScrollView>
  );
}
