import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function WeatherDetails({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Detalhes do clima
      </Text>

      <View style={styles.grid}>

        <View style={styles.item}>
          <Text style={styles.icon}>
            🧭
          </Text>

          <View>
            <Text style={styles.value}>
              {weather.wind_cardinal}
            </Text>

            <Text style={styles.label}>
              Direção
            </Text>
          </View>
        </View>


        <View style={styles.item}>
          <Text style={styles.icon}>
            🌙
          </Text>

          <View>
            <Text style={styles.value}>
              {getMoonPhase(weather.moon_phase)}
            </Text>

            <Text style={styles.label}>
              Fase da lua
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>
            🌅
          </Text>

          <View>
            <Text style={styles.value}>
              {weather.sunrise}
            </Text>

            <Text style={styles.label}>
              Nascer do sol
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.icon}>
            🌇
          </Text>

          <View>
            <Text style={styles.value}>
              {weather.sunset}
            </Text>

            <Text style={styles.label}>
              Pôr do sol
            </Text>
          </View>
        </View>

        

       

      </View>
    </View>
  );
}

function getMoonPhase(phase) {
  const phases = {
    new: 'Lua nova',
    waxing_crescent: 'Crescente',
    first_quarter: 'Quarto crescente',
    waxing_gibbous: 'Gibosa crescente',
    full: 'Lua cheia',
    waning_gibbous: 'Gibosa minguante',
    last_quarter: 'Quarto minguante',
    waning_crescent: 'Minguante',
  };

  return phases[phase] || phase || '--';
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.09)',
    padding: 14,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  item: {
    width: '48%',
    minHeight: 72,

    marginBottom: 10,

    borderRadius: 14,

    backgroundColor:
      'rgba(255,255,255,0.08)',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  icon: {
    fontSize: 24,
    marginRight: 10,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  label: {
    color: '#AFC5F4',
    fontSize: 10,
    marginTop: 3,
  },
});
