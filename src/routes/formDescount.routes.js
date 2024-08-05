import {Router} from "express";
import {authRequired} from '../middlewares/validateToken.js'
import {getDataUsers, createDataUsers} from '../controllers/DataUsers.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {createUserSchema} from '../schemas/users.schema.js'

const router = Router();

//Rutas Formulario de "descuento"
router.get("/users", authRequired, getDataUsers )

router.post('/formDescount', validateSchema(createUserSchema), createDataUsers );

export default router;