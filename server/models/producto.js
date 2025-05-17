const mongoose = require("mongoose")

const productoSchema = new mongoose.Schema({
    nombre : {
      type:String,
      require : true
    
    },
    precio :{
        type : Number,
        require : true
    },
    descripcion :{
        type : string,
        require : true
    },
    imagen:{
        type : string,
        require : true
    }
})

const Producto = mongoose.model('Productos',productoSchema)

module.exports = Producto