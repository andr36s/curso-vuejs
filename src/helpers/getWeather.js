import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=6.2518&longitude=-75.5636&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        const nuevaTemperatura = respuesta.data.current.temperature_2m;

        if (respuesta.status != 200) {
            return console.log('Error al obtener la temperatura:', respuesta.status); // Manejar el error si la respuesta no es exitosa            
        }
        return nuevaTemperatura; // Retornar la temperatura obtenida
    } catch (error) {
        console.error('Error al obtener la temperatura:', error);
        throw error; // Re-lanzar el error para que pueda ser manejado por quien llame a esta función
    }
}