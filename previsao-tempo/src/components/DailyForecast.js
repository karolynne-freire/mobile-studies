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
  if (!forecast || forecast.length <= 1) {
    return null;
  }

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.title}>
            Próximos dias
          </Text>
        </View>
      </View>

      {/* PREVISÕES */}
      {forecast
        .slice(1, 5)
        .map((item, index) => (
          <View
            key={`${item.date}-${index}`}
            style={styles.row}
          >

            {/* DIA */}
            <View style={styles.dayContainer}>
              <Text style={styles.day}>
                {item.weekday}
              </Text>

              <Text style={styles.date}>
                {item.date}
              </Text>
            </View>

            {/* ÍCONE */}
            <WeatherIcon
              condition={item.condition}
              size={35}
            />

            {/* DESCRIÇÃO + CHUVA */}
            <View style={styles.descriptionContainer}>
              <Text
                style={styles.description}
                numberOfLines={1}
              >
                {item.description}
              </Text>

              <View style={styles.rainContainer}>
                <Ionicons
                  name="rainy-outline"
                  size={12}
                  color="#AFC7FF"
                />

                <Text style={styles.rain}>
                  {item.rain_probability}% de chance
                </Text>
              </View>
            </View>

            {/* TEMPERATURAS */}
            <View style={styles.temperatureContainer}>

              <Text style={styles.max}>
                {item.max}°C
              </Text>

              <Text style={styles.min}>
                {item.min}°C
              </Text>

            </View>

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
    padding: 14,
  },

  header: {
    marginBottom: 8,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },

  row: {
    minHeight: 78,

    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor:
      'rgba(255,255,255,0.06)',
  },

  dayContainer: {
    width: 50,
  },

  day: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  date: {
    color: '#9FB6E8',
    fontSize: 9,
    marginTop: 3,
  },

  descriptionContainer: {
    flex: 1,
    marginLeft: 8,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },

  rainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  rain: {
    color: '#AFC7FF',
    fontSize: 8,
    marginLeft: 3,
  },

  temperatureContainer: {
    width: 55,
    alignItems: 'flex-end',
  },

  max: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  min: {
    color: '#9FB6E8',
    fontSize: 10,
    marginTop: 3,
  },

});
