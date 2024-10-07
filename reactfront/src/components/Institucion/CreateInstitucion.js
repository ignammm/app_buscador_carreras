import React, { useState } from 'react';
import MapSelector from '../MapSelector.js';

const URI = 'http://localhost:8000/instituciones';

const CompCreateInstitucion = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [pagina, setPagina] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ubicacion_lat, setUbicacionLat] = useState('');
  const [ubicacion_long, setUbicacionLong] = useState('');

  const handleSelectLocation = (lat, lng) => {
    setUbicacionLat(lat);
    setUbicacionLong(lng);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const newInstitucion = {
      nombre,
      direccion,
      correo,
      pagina,
      telefono,
      ubicacion_lat,
      ubicacion_long
    };

    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInstitucion),
      });

      if (!response.ok) {
        throw new Error('Error al crear la institución');
      }
      window.location.href = '/'; 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Institución</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Página:</label>
          <input
            type="text"
            value={pagina}
            onChange={(e) => setPagina(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div>
          <h2>Selecciona la ubicación</h2>
          <MapSelector onSelectLocation={handleSelectLocation} />
        </div>
        <input
          type="hidden"
          value={ubicacion_lat}
          name="ubicacion_lat"
        />
        <input
          type="hidden"
          value={ubicacion_long}
          name="ubicacion_long"
        />
          <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CompCreateInstitucion;
