import {TOKEN_SECRET_KEY} from '../config.js';
import jwt from 'jsonwebtoken'

//Generación de token
export function CreateAccesToken(paylod)
{
    return new Promise((res, rej) =>{
        jwt.sign(
            paylod, 
            TOKEN_SECRET_KEY,
            {
            expiresIn: "1d",
            },
            (err, token) => {
                if(err) rej(err);
                res(token);
            }
        )
    })
}
