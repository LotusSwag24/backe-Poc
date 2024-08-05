import dataUserSchema from '../models/datauser.model.js';

export const getDataUsers = async (req, res) => {
    const allDataUsers = await dataUserSchema.find();
    res.json(allDataUsers);
}

export const createDataUsers = async (req, res) => {
    const {name, 
           lastname, 
           number, 
           company, 
           department, 
           address, 
           ci} = req.body;
           
    const newDataUser = new dataUserSchema({
        name,
        lastname,
        number,
        company,
        department,
        address,
        ci
    })
    const dataUserSaved = await newDataUser.save();
    res.json(dataUserSaved);
}