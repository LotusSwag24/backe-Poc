import jwt from 'jsonwebtoken'
import {TOKEN_SECRET_KEY} from '../config.js'

//Validación de Token
export const authRequired = (req,res,next) => {
    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "Not Token, authorization denied"});
    
    jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
        if(err) return res.status(401).json({message: "Invalid Token"})
            req.user = user
        next()
    })  
}