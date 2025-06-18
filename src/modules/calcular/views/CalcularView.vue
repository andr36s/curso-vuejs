<template>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valor }}
</template>

<script setup>
import { ref, computed } from 'vue';
const valor = ref('');
</script>

<style scoped>
</style>