import mongoose from "mongoose";

//Modelo de creación de datos de usuario
const dataUserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    number:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    ci:{
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
    

export default mongoose.model("dataUser", dataUserSchema);