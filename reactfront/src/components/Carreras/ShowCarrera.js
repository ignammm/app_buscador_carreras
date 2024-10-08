import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../useFetch.js';

const URI = 'http://localhost:8000/carreras';

const CompShowCarreras = () => {
  const { id_institucion } = useParams(); 
  const { data: carreras, loading, error } = useFetch(`${URI}?id_institucion=${id_institucion}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Carreras de la Institución {id_institucion}</h1>
      <Link to={`/instituciones/${id_institucion}/crear-carrera`}>
        <button>Crear Nueva Carrera</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Plan de Estudio</th>
            <th>Modalidad</th>
            <th>Cupo</th>
            <th>Fecha de Inscripción</th>
            <th>Duración (Años)</th>
            <th>Duración (Meses)</th>
            <th>Duración (Semanas)</th>
            <th>Estado</th>
            <th>Prioridad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carreras && carreras.map(carrera => (
            <tr key={carrera.id}>
              <td>{carrera.nombre}</td>
              <td>{carrera.tipo}</td>
              <td>{carrera.descripcion}</td>
              <td>{carrera.plan_estudio}</td>
              <td>{carrera.modalidad}</td>
              <td>{carrera.cupo}</td>
              <td>{new Date(carrera.fecha_inscripcion).toLocaleDateString()}</td>
              <td>{carrera.duracion_anio}</td>
              <td>{carrera.duracion_meses}</td>
              <td>{carrera.duracion_semanas}</td>
              <td>{carrera.estado}</td>
              <td>{carrera.prioridad}</td>
              <td>
                <Link to={`/instituciones/${id_institucion}/editar-carrera/${carrera.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompShowCarreras;
