<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form>

            <div class="form">
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="Ingrese nombre" />
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <input type="email" placeholder="Ingrese correo electrónico" />
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import {Form, Field} from 'vee-validate';
</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>