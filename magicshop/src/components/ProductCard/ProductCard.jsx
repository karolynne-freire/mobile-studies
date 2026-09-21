import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './ProductCard.styles';

export default function ProductCard({
  product,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {product.title}
        </Text>

        <Text
          style={styles.category}
          numberOfLines={1}
        >
          {product.category}
        </Text>

        <View style={styles.bottom}>
          <Text style={styles.price}>
            R$ {product.price.toFixed(2)}
          </Text>

          <Text style={styles.rating}>
            ★ {product.rating.toFixed(1)}
          </Text>
        </View>
      </View>

      <Text style={styles.arrow}>
        ›
      </Text>
    </TouchableOpacity>
  );
}
