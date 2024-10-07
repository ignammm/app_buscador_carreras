// src/components/Institucion/UpdateInstitucion.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/instituciones';

const UpdateInstitucion = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [institucion, setInstitucion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstitucion = async () => {
      try {
        const response = await fetch(`${URI}/${id}`);
        if (!response.ok) throw new Error('Error al obtener la institución');
        const data = await response.json();
        setInstitucion(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitucion();
  }, [id]);

  const handleChange = (e) => {
    setInstitucion({ ...institucion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URI}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(institucion),
      });
      if (!response.ok) throw new Error('Error al actualizar la institución');
      navigate('/'); // Redirige al listado después de actualizar
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Editar Institución</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={institucion.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            name="direccion"
            value={institucion.direccion}
            onChange={handleChange}
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={institucion.correo}
            onChange={handleChange}
          />
        </label>
        <label>
          Página:
          <input
            type="text"
            name="pagina"
            value={institucion.pagina}
            onChange={handleChange}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={institucion.telefono}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateInstitucion;
