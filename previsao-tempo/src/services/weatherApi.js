const API_KEY = '0acc6872';

const BASE_URL = 'https://api.hgbrasil.com/weather';

export async function getWeather(city) {
  try {
    const url =
      `${BASE_URL}?key=${API_KEY}` +
      `&city_name=${encodeURIComponent(city)}`;

    console.log('Consultando:', url);

    const response = await fetch(url);

    const data = await response.json();

    console.log('Resposta da API:', data);

    if (!response.ok) {
      throw new Error('Erro na API');
    }

    if (data.error) {
      throw new Error(
        data.message || 'Erro ao buscar cidade'
      );
    }

    if (!data.results) {
      throw new Error('Cidade não encontrada');
    }

    return data.results;
  } catch (error) {
    console.log('Erro:', error);
    throw error;
  }
}
