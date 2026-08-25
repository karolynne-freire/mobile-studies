export function getWeatherIconUrl(condition) {
  const conditions = [
    'storm',
    'snow',
    'hail',
    'rain',
    'fog',
    'clear_day',
    'clear_night',
    'cloud',
    'cloudly_day',
    'cloudly_night',
  ];

  const selected = conditions.includes(condition)
    ? condition
    : 'cloud';

  return `https://assets.hgbrasil.com/weather/icons/conditions/${selected}.svg`;
}
