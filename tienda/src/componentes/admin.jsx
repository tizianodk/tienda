import { useState } from "react";
import "../estilos/adminPanel.css";


const AdminPanel = () => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: null
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      imagen: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      alert("Producto agregado con éxito");
      setForm({ nombre: "", descripcion: "", precio: "", imagen: "" });
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="titulo">Agregar Producto</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        /> 
        IMAGEN: 
        <input
          type="file"
          name="imagen"
          placeholder="URL de imagen"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
