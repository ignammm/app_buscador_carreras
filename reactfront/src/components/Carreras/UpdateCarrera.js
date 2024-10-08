import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../useFetch.js';

const URI = 'http://localhost:8000/carreras';

const CompUpdateCarrera = () => {
  const { id } = useParams();
  const { id_institucion } = useParams();
  const navigate = useNavigate();
  const { data: carrera, loading, error, setData: setCarrera } = useFetch(`${URI}/${id}`);
  
  const handleChange = (e) => {
    setCarrera({ ...carrera, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URI}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carrera),
      });
      if (!response.ok) throw new Error('Error al actualizar la carrera');
      navigate(`/instituciones/${id_institucion}/carreras`); 
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Editar Carrera</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={carrera.nombre || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={carrera.tipo || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="descripcion"
            value={carrera.descripcion || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Plan de Estudio:
          <input
            type="text"
            name="plan_estudio"
            value={carrera.plan_estudio || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Modalidad:
          <select
            name="modalidad"
            value={carrera.modalidad || ''}
            onChange={handleChange}
          >
            <option value="">Seleccione una modalidad</option>
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
            <option value="mixta">Mixta</option>
          </select>
        </label>
        <label>
          Cupo:
          <input
            type="text"
            name="cupo"
            value={carrera.cupo || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Fecha de Inscripción:
          <input
            type="date"
            name="fecha_inscripcion"
            value={carrera.fecha_inscripcion || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Duración (Años):
          <input
            type="number"
            name="duracion_anio"
            value={carrera.duracion_anio || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Duración (Meses):
          <input
            type="number"
            name="duracion_meses"
            value={carrera.duracion_meses || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Duración (Semanas):
          <input
            type="number"
            name="duracion_semanas"
            value={carrera.duracion_semanas || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Estado:
          <input
            type="number"
            name="estado"
            value={carrera.estado || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Prioridad:
          <input
            type="number"
            name="prioridad"
            value={carrera.prioridad || ''}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default CompUpdateCarrera;
