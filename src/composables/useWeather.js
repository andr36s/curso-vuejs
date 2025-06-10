import { useWeatherStore } from '@/stores/weatherStore';
import { getTemperatura } from '@/helpers/getWeather';

// Composable para manejar la lógica de la temperatura para que use y get se comuniquen
export const useWeather = async () => {
    const temperatura = await getTemperatura()
    const weatherStore = useWeatherStore();

    weatherStore.temperatura = temperatura; // Actualizar la temperatura en el store
}