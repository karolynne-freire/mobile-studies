import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './BottomTab.styles';

export default function BottomTab({
  navigation,
  active = 'products',
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Products')}
      >
        <Ionicons
          name={
            active === 'products'
              ? 'home'
              : 'home-outline'
          }
          size={22}
          color={
            active === 'products'
              ? '#6847E8'
              : '#999'
          }
        />

        <Text
          style={[
            styles.label,
            active === 'products' && styles.active,
          ]}
        >
          Início
        </Text>
      </TouchableOpacity>

      {/* Favoritos */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons
          name="heart-outline"
          size={22}
          color="#999"
        />

        <Text style={styles.label}>
          Favoritos
        </Text>
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons
          name="person-outline"
          size={22}
          color="#999"
        />

        <Text style={styles.label}>
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
}

