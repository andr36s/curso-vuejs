<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" placeholder="Nueva tarea" @keyup.enter="agregarTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea(index)">Borrar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const tareas = ref([]);
    const nuevaTarea = ref('');

    const agregarTarea = () => {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
const borrarTarea = (index) => {
        tareas.value.splice(index, 1);
    }
    
</script>

<style>

</style>