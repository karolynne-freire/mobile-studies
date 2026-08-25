import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { WeatherIcon } from './WeatherIcon';

export function HourlyForecast({ weather }) {
  const today = weather.forecast[0];

  const currentTemperature = weather.temp;

  const min = today?.min ?? currentTemperature;
  const max = today?.max ?? currentTemperature;

  const middle = Math.round(
    (min + max) / 2
  );

  const items = [
    {
      time: '15:00',
      temperature: currentTemperature,
      condition: weather.condition_slug,
    },
    {
      time: '16:00',
      temperature: middle,
      condition:
        today?.condition ||
        weather.condition_slug,
    },
    {
      time: '17:00',
      temperature: Math.max(
        min,
        middle - 1
      ),
      condition:
        today?.condition ||
        weather.condition_slug,
      active: true,
    },
    {
      time: '18:00',
      temperature: min,
      condition:
        today?.condition ||
        weather.condition_slug,
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View
          key={item.time}
          style={[
            styles.item,
            item.active && styles.activeItem,
          ]}
        >
          <Text style={styles.time}>
            {item.time}
          </Text>

          <WeatherIcon
            condition={item.condition}
            size={31}
          />

          <Text style={styles.temperature}>
            {item.temperature}°
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 17,
    backgroundColor:
      'rgba(255,255,255,0.10)',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },

  item: {
    flex: 1,
    minHeight: 82,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },

  activeItem: {
    backgroundColor:
      'rgba(255,255,255,0.10)',
  },

  time: {
    color: '#D1DDFF',
    fontSize: 9,
    marginBottom: 5,
  },

  temperature: {
    color: '#FFFFFF',
    fontSize: 11,
    marginTop: 4,
    fontWeight: '600',
  },
});
