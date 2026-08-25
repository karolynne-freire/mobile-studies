import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { WeatherIcon } from './WeatherIcon';
import Ionicons from '@expo/vector-icons/Ionicons';


export function DailyForecast({
  forecast,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Próxima Previsão
        </Text>

       <Ionicons
  name="calendar-outline"
  size={18}
  color="#FFFFFF"
/>
      </View>

      {forecast
        .slice(1, 5)
        .map((item, index) => (
          <View
            key={`${item.date}-${index}`}
            style={styles.row}
          >
            <Text style={styles.day}>
              {item.weekday}
            </Text>

            <WeatherIcon
              condition={item.condition}
              size={27}
            />

            <View
              style={styles.descriptionContainer}
            >
              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.rain}>
                💧 {item.rain_probability}%
              </Text>
            </View>

            <Text style={styles.max}>
              {item.max}°
            </Text>

            <Text style={styles.min}>
              {item.min}°
            </Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    borderRadius: 17,
    backgroundColor:
      'rgba(255,255,255,0.09)',
    padding: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  calendar: {
    color: '#FFFFFF',
    fontSize: 17,
  },

  row: {
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor:
      'rgba(255,255,255,0.06)',
  },

  day: {
    width: 55,
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  descriptionContainer: {
    flex: 1,
    marginLeft: 5,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 9,
  },

  rain: {
    color: '#AFC7FF',
    fontSize: 8,
    marginTop: 2,
  },

  max: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    marginRight: 7,
  },

  min: {
    width: 25,
    color: '#9FB6E8',
    fontSize: 10,
  },
});
