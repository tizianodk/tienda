const mongoose = require("mongoose")
const producto = require("../models/producto.js")

exports.Post  = async (req,res)=>{

  try{
    const {nombre,precio,descripcion} = req.body;
    const imagen = req.file ? req.file.filename : null;
   const nuevoProducto = new producto({nombre,precio,descripcion,imagen})
    nuevoProducto.save()
   }
   catch(err){
    console.log("ocurrio un error")
   }

}