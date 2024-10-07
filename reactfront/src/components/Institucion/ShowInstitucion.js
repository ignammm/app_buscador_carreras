import React from 'react';
import { useFetch } from '../useFetch.js';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/instituciones';

const CompShowInstituciones = () => {
  const { data: instituciones, loading, error } = useFetch(URI);

  const deleteInstitucion = async (id) => {
    try {
      const response = await fetch(`${URI}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar la institución');
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;  

  return (
    <div>
      <h1>Lista de Instituciones</h1>
      <Link to="/crear-institucion">
        <button>Nueva Institución</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Correo</th>
            <th>Página</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {instituciones && instituciones.map(institucion => (
            <tr key={institucion.id}>
              <td>{institucion.nombre}</td>
              <td>{institucion.direccion}</td>
              <td>{institucion.correo}</td>
              <td>{institucion.pagina}</td>
              <td>{institucion.telefono}</td>
              <td>
                <button onClick={() => deleteInstitucion(institucion.id)}>Eliminar</button>
                <Link to={`/editar-institucion/${institucion.id}`}>
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

export default CompShowInstituciones;
