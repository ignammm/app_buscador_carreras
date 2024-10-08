import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const URI = 'http://localhost:8000/carreras'; 

const CompCreateCarrera = () => {
  const { id_institucion } = useParams(); 
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [plan_estudio, setPlanEstudio] = useState('');
  const [modalidad, setModalidad] = useState(''); 
  const [cupo, setCupo] = useState('');
  const [fecha_inscripcion, setFechaInscripcion] = useState('');
  const [duracion_anio, setDuracionAnio] = useState('');
  const [duracion_meses, setDuracionMeses] = useState('');
  const [duracion_semanas, setDuracionSemanas] = useState('');
  const [estado, setEstado] = useState(1); 
  const [prioridad, setPrioridad] = useState(1); 

  const handleCreate = async (e) => {
    e.preventDefault();

    const newCarrera = {
      nombre,
      tipo,
      descripcion,
      plan_estudio,
      modalidad,
      cupo,
      fecha_inscripcion,
      duracion_anio,
      duracion_meses,
      duracion_semanas,
      estado,
      prioridad,
      id_institucion,
    };

    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCarrera),
      });

      if (!response.ok) {
        throw new Error('Error al crear la carrera');
      }
      window.location.href = `/instituciones/${id_institucion}/carreras`; 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Carrera</h2>
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
          <label>Tipo:</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Plan de Estudio:</label>
          <input
            type="text"
            value={plan_estudio}
            onChange={(e) => setPlanEstudio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Modalidad:</label>
          <select
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            required
          >
            <option value="">Seleccione una modalidad</option>
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
            <option value="mixta">Mixta</option>
          </select>
        </div>
        <div>
          <label>Cupo:</label>
          <input
            type="text"
            value={cupo}
            onChange={(e) => setCupo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Inscripción:</label>
          <input
            type="date"
            value={fecha_inscripcion}
            onChange={(e) => setFechaInscripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duración (Años):</label>
          <input
            type="number"
            value={duracion_anio}
            onChange={(e) => setDuracionAnio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duración (Meses):</label>
          <input
            type="number"
            value={duracion_meses}
            onChange={(e) => setDuracionMeses(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duración (Semanas):</label>
          <input
            type="number"
            value={duracion_semanas}
            onChange={(e) => setDuracionSemanas(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="number"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Prioridad:</label>
          <input
            type="number"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CompCreateCarrera;
