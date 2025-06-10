import { defineStore } from "pinia";
import { ref } from "vue"; // Para reactividad

export const useWeatherStore = defineStore("weather", () => {
    temperatura = ref(0);

    const setTemperatura = (temp) => {
        temperatura.value = temp;
    }
    return {temperatura, setTemperatura};
})