const User = require("../models/user.js")
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req,res)=>{

    try{

      const usuarios = await User.find()
    
      res.json(usuarios)
    }
    catch(err){
        console.log("se econtro un error")
    }
}
exports.Register = async(req,res)=>{

    try{
       
        const {nombre,apellido,email,password,rol} = req.body
        const nuevoU = await new User({nombre,apellido,email,password,  rol: rol || "cliente"})
        nuevoU.save()
        res.status(201).json({ message: "Usuario registrado con éxito" });

    }
    catch(err){
        console.log("ocurrio un error",err)
    }
}
exports.Login = async(req,res)=>{
    try{
       
        const {email,password} = req.body
        const user = await User.findOne({email})

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if(user.email !== email){
        return res.status(401).json({ message: "Email incorrecto" });
    }
    
    if(user.password !== password){
        return res.status(401).json({ message: "Contraseña incorrecta" });
    }   
   

const token = jwt.sign(
      { id: user._id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      token,
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol        
      }
    });
  }
catch(err){
    console.log("ocurrio un error" +err)
}
}