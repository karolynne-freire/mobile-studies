import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { getWeatherIconUrl } from '../utils/weather';

export function WeatherIcon({
  condition,
  size = 70,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SvgUri
        width={size}
        height={size}
        uri={getWeatherIconUrl(condition)}
      />
    </View>
  );
}
