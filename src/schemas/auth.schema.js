import {z} from 'zod';

//Validación en el lado del frontend - Registro de usuario
export const registerSchema = z.object({
    username: z.string({
        required_error: 'Nombre de usuario es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).max(10, 'La contraseña debe tener como máximo 12 caracteres')
});

//Validación en el lado del frontend - Login User
export const loginSchema = z.object({
    username: z.string({
        required_error: 'Nombre de usuario es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    })
    })