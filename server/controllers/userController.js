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
   

  res.status(200).json({
    message: "Login exitoso",
    user: {
      id: usuario._id,
      nombre: usuario.nombre,
      rol: usuario.rol,
    },
  })
}
    
catch(err){
    console.log("ocurrio un error")
}
}