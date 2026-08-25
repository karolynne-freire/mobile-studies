import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function StatItem({
  icon,
  value,
  label,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        {icon}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 13,
    marginBottom: 3,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  label: {
    color: '#C0D2FF',
    fontSize: 20,
    marginTop: 2,
  },
});
