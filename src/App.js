import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    habitacion: '',
    rh: 'A+',
    entrada: '',
    salida: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servidor
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identificacion">Identificación:</label>
          <input type="text" id="identificacion" name="identificacion" value={formData.identificacion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="habitacion">Habitación:</label>
          <input type="text" id="habitacion" name="habitacion" value={formData.habitacion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rh">RH:</label>
          <select id="rh" name="rh" value={formData.rh} onChange={handleChange}>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="entrada">Fecha de Entrada:</label>
          <input type="date" id="entrada" name="entrada" value={formData.entrada} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="salida">Fecha de Salida:</label>
          <input type="date" id="salida" name="salida" value={formData.salida} onChange={handleChange} required />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">Registrar</button>
          <button type="button" className="btn btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
