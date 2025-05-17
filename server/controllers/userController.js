const User = require("../models/user.js")
const mongoose = require("mongoose")

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
       
        const {nombre,apellido,email,password} = req.body
        const nuevoU = await new User({nombre,apellido,email,password})
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
    
   if(user.password !== password){
        return res.status(401).json({ message: "Contraseña incorrecta" });

   }

 res.json({ message: "Inicio de sesión exitoso", user });
  } catch (error) {
    res.status(500).json({ message: "Error en el login", error });
  }
    
}