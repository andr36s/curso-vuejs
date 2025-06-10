import { defineStore } from 'pinia'; // Importar defineStore de Pinia para crear una tienda
import { ref, computed } from 'vue'; //Inicializar variables reactivas y computadas

export const useRegistrarStore = defineStore('registrar', () => {
    const nombre = ref(''); // Variable reactiva para almacenar el nombre
    const correo = ref('');


    const guardarRegistro = (nombreFormulario, correoFormulario) => { // Los parametros vienen desde el formulario
        nombre.value = nombreFormulario; // Asignar el valor del formulario a la variable reactiva
        correo.value = correoFormulario; 
        console.log(`Nombre: ${nombre.value}, Email: ${correo.value}`);
    }
    return {nombre, correo, guardarRegistro}
})