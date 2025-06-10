<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese nombre" />
                <ErrorMessage name="nombre" class="error" />
            </div>
            <div class="form">
                <label for="correo">Correo:</label>
                <Field v-model="correo" type="email" name="correo" id="correo" placeholder="Ingrese correo electrónico" />
                <ErrorMessage name="correo" class="error" />
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { schema } from '../schemas/validationSchema';
    import { useRegistrarStore } from '../stores/registrarStore';
    import { ref } from 'vue';

    const registrarStore = useRegistrarStore();

    const nombre = ref(''); // Variable para almacenar el nombre
    const correo = ref(''); 

    const onSubmit = () => {
        registrarStore.guardarRegistro(nombre.value, correo.value);
        console.log('Formulario enviado');
    }
</script>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>