import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './SearchBar.styles';

export default function SearchBar({
  value,
  onChangeText,
  onFilterPress,
}) {
  return (
    <View style={styles.container}>

      {/* Busca */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#999"
        />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Buscar produtos..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Filtrar */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterPress}
        activeOpacity={0.8}
      >
        <Ionicons
          name="options-outline"
          size={19}
          color="#6847E8"
        />

        <Text style={styles.filterText}>
          Filtrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

