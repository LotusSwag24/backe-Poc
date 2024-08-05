import userSchema from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {CreateAccesToken} from '../libs/jwt.js';

export const register = async (req, res) => {
    const {username, password} = req.body
    try{
        const passworddHash = await bcrypt.hash(password, 10)
        const newUSer = new userSchema({
            username,
            password: passworddHash
        })
        
        const userSaved = await newUSer.save();
        const token = await CreateAccesToken({id: userSaved._id})
        res.cookie("token", token)
                res.json({
                    message: "User created successfully"})
        res.json({
            id: userSaved._id,
            username: userSaved.username
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body
    try{
        const userFound = await userSchema.findOne({username})

        if(!userFound) return res.status(400).json({message: "User not found"})

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({message: "Invalid credentials"})
        
        const token = await CreateAccesToken({id: userFound._id})
        res.cookie("token", token)
        res.json({
            id: userFound._id,
            username: userFound.username, 
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await userSchema.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}