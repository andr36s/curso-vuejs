import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required('El nombre es obligatorio'),
    correo: yup.string().email('Debe ser un correo electrónico válido').required('El correo es obligatorio'),
})