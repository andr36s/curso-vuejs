import { defineStore } from 'pinia'; // Importar defineStore de Pinia para crear una tienda
import { ref, computed } from 'vue'; //Inicializar variables reactivas y computadas

const useRegistrarStore = defineStore('registrar', () => {
    const nombre = ref(''); // Variable reactiva para almacenar el nombre
    const email = ref('');


    
})