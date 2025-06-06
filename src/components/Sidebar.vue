<template>
<div class="sidebar">
    <h2>Barra lateral</h2>
    <RouterLink to="/contador">Contador</RouterLink>
    <RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink>
</div>
</template>

<script setup>

</script>

<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>