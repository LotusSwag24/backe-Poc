import {z} from 'zod';

//Validación en el lado del frontend - Crear datos de usuario
export const createUserSchema = z.object({
    name: z.string({
        required_error: 'El Nombre es requerido'
    }),
    lastname: z.string({
        required_error: 'El Apellido es requerido'
    }),
    number: z.string({
        required_error: 'Número de teléfono es requerido'
    }).max(10, 'Número de teléfono debe tener máximo 10 caracteres'),
    company: z.string({
        required_error: 'El nombre de la compañia es requerido'
    }),
    department: z.string({
        required_error: 'El nombre del departamento es requerido'
    }),
    address: z.string({
        required_error: 'La dirección es requerida'
    }),
    ci: z.string({
        required_error: 'La cédula es requerida'
    }).max(10, 'La cédula debe tener máximo 10 caracteres'),
})