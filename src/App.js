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

  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    if (!value) {
      setErrors({ ...errors, [fieldName]: 'Este campo es obligatorio.' });
    } else {
      setErrors({ ...errors, [fieldName]: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    validateField(name, value);
  };

  const handleRegister = () => {
    // Realiza cualquier lógica de validación adicional aquí

    // Verifica si hay errores
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      alert('Por favor, complete todos los campos correctamente.');
    } else {
      alert('Se registró con éxito');
    }
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="identificacion">Identificación:</label>
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
          />
          {errors.identificacion && <div className="error">{errors.identificacion}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />
          {errors.nombres && <div className="error">{errors.nombres}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
          {errors.apellidos && <div className="error">{errors.apellidos}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <div className="error">{errors.telefono}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="habitacion">Habitación:</label>
          <input
            type="text"
            id="habitacion"
            name="habitacion"
            value={formData.habitacion}
            onChange={handleChange}
          />
          {errors.habitacion && <div className="error">{errors.habitacion}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="rh">RH:</label>
          <select
            id="rh"
            name="rh"
            value={formData.rh}
            onChange={handleChange}
          >
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
          <input
            type="date"
            id="entrada"
            name="entrada"
            value={formData.entrada}
            onChange={handleChange}
          />
          {errors.entrada && <div className="error">{errors.entrada}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="salida">Fecha de Salida:</label>
          <input
            type="date"
            id="salida"
            name="salida"
            value={formData.salida}
            onChange={handleChange}
          />
          {errors.salida && <div className="error">{errors.salida}</div>}
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={handleRegister}>Registrar</button>
          <button type="button" className="btn btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
