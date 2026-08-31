import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { DailyForecast } from './src/components/DailyForecast';
import { HourlyForecast } from './src/components/HourlyForecast';
import { StatItem } from './src/components/StatItem';
import { WeatherIcon } from './src/components/WeatherIcon';

import { getWeather } from './src/services/weatherApi';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Recife,PE');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const loadWeather = useCallback(
    async (cityName) => {
      try {
        setError('');

        const result =
          await getWeather(cityName);

        setWeather(result);
        setCity(result.city_name);
      } catch (err) {
        setError(
          'Não foi possível carregar a previsão.'
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    []
  );

  useEffect(() => {
    loadWeather('Recife,PE');
  }, [loadWeather]);

const handleSearch = () => {
  const value = search.trim();

  if (!value) {
    return;
  }

  Keyboard.dismiss();

  loadWeather(value);

  setSearch('');
};


  const handleRefresh = () => {
    setRefreshing(true);
    loadWeather(city);
  };

  if (loading && !weather) {
    return (
      <LinearGradient
        colors={[
          '#132A73',
          '#2449A5',
        ]}
        style={styles.loading}
      >
        <ActivityIndicator
          size="large"
          color="#FFFFFF"
        />

        <Text style={styles.loadingText}>
          Carregando previsão...
        </Text>
      </LinearGradient>
    );
  }

  if (!weather) {
    return (
      <LinearGradient
        colors={[
          '#132A73',
          '#2449A5',
        ]}
        style={styles.loading}
      >
        <Text style={styles.errorTitle}>
          Ops!
        </Text>

        <Text style={styles.errorText}>
          {error}
        </Text>

        <TouchableOpacity
          style={styles.retry}
          onPress={() =>
            loadWeather('Recife,PE')
          }
        >
          <Text style={styles.retryText}>
            Tentar novamente
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  const today = weather.forecast[0];

  return (
    <LinearGradient
      colors={[
        '#142C79',
        '#3159BA',
      ]}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#142C79"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            styles.scroll
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FFFFFF"
            />
          }
        >
          <View style={styles.card}>

<View style={styles.header}>
  <View style={styles.locationContainer}>
    <Ionicons
      name="location-outline"
      size={30}
      color="#FFFFFF"
    />

    <Text style={styles.location}>
      {weather.city_name}
    </Text>

    <TouchableOpacity
  onPress={() => setShowSearch(!showSearch)}
>
  <Ionicons
    name={showSearch ? 'chevron-up' : 'chevron-down'}
    size={30}
    color="#FFFFFF"
  />
</TouchableOpacity>

  </View>

  <Ionicons
    name="notifications-outline"
    size={30}
    color="#FFFFFF"
  />
</View>





{showSearch && (
  <View style={styles.search}>
    <TextInput
      value={search}
      onChangeText={setSearch}
      onSubmitEditing={handleSearch}
      placeholder="Pesquisar cidade..."
      placeholderTextColor="#9EB6E8"
      style={styles.input}
      returnKeyType="search"
      autoFocus
    />

    <TouchableOpacity
      onPress={handleSearch}
      style={styles.searchButton}
    >
      <Text style={styles.searchButtonText}>
        Buscar
      </Text>
    </TouchableOpacity>
  </View>
)}

            <View style={styles.mainWeather}>
              <WeatherIcon
                condition={
                  weather.condition_slug
                }
                size={100}
              />

              <Text style={styles.temp}>
                {weather.temp}°
              </Text>

              <Text style={styles.description}>
                {weather.description}
              </Text>

              <Text style={styles.maxMin}>
                Máx.: {today?.max}°{' '}
                Min.: {today?.min}°
              </Text>
            </View>


            <View style={styles.stats}>
              <View style={styles.stats}>
  <StatItem
  icon=""
  value={`${today?.rain ?? 0} mm`}
  label="Chuva prevista"
/>


  <StatItem
    icon=""
    value={`${weather.humidity}%`}
    label="Umidade"
  />

  <StatItem
    icon=""
    value={weather.wind_speedy}
    label="Vento"
  />
</View>

            </View>

            {/* TODAY

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  Hoje
                </Text>

                <Text style={styles.date}>
                  {weather.date}
                </Text>
              </View>

              <HourlyForecast
                weather={weather}
              />
            </View> */}


            <DailyForecast
              forecast={weather.forecast}
            />

            <Text style={styles.footer}>
              Dados fornecidos pela HG Brasil
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  scroll: {
    padding: 15,
    paddingVertical: 20,
  },

  card: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    borderRadius: 28,
    padding: 18,
    backgroundColor:
      'rgba(26,62,145,0.96)',
  },

header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

locationContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},

location: {
  color: '#FFFFFF',
  fontSize: 35,
  fontWeight: '600',
  marginLeft: 10,
  marginRight: 5,
},



  bell: {
    fontSize: 18,
  },

  search: {
    flexDirection: 'row',
    height: 80,
    marginTop: 14,
    borderRadius: 13,
    backgroundColor:
      'rgba(255,255,255,0.10)',
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingHorizontal: 13,
    fontSize: 20,
  },

  searchButton: {
    justifyContent: 'center',
    paddingHorizontal: 13,
  },

  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  mainWeather: {
    alignItems: 'center',
    marginTop: 15,
  },

  temp: {
    color: '#FFFFFF',
    fontSize: 80,
    fontWeight: '300',
  },

  description: {
    color: '#FFFFFF',
    fontSize: 30,
  },

  maxMin: {
    color: '#C0D2FF',
    fontSize: 25,
    marginTop: 4,
  },

  stats: {
    flexDirection: 'row',
    height: 85,
    marginTop: 14,
    borderRadius: 14,
    backgroundColor:
      'rgba(5,24,76,0.22)',
  },

  section: {
    marginTop: 20,
     height: 90,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  date: {
    color: '#C2D1F4',
    fontSize: 9,
  },

  footer: {
    color: '#AFC5F4',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    color: '#FFFFFF',
    marginTop: 15,
  },

  errorTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  errorText: {
    color: '#FFFFFF',
    marginTop: 10,
  },

  retry: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  retryText: {
    color: '#24479F',
    fontWeight: '700',
  },
});
