import { useState } from "react";
import { useCarreras } from '../hooks/useCarreras';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateCarrera = () => {
    const { createCarreras } = useCarreras();
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [planEstudio, setPlanEstudio] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [cupo, setCupo] = useState('');
    const [fechaInscripcion, setFechaInscripcion] = useState('');
    const [duracionAnio, setDuracionAnio] = useState(0);
    const [duracionMeses, setDuracionMeses] = useState(0);
    const [duracionSemanas, setDuracionSemanas] = useState(0);
    const [estado, setEstado] = useState(1);
    const [errors, setErrors] = useState({});
    const { id_institucion } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nombre,
            tipo,
            descripcion,
            plan_estudio: planEstudio,
            modalidad,
            cupo,
            fecha_inscripcion: fechaInscripcion,
            duracion_anio: duracionAnio,
            duracion_meses: duracionMeses,
            duracion_semanas: duracionSemanas,
            id_institucion,
            estado
        };

        console.log(formData);

        try {
            const result = await createCarreras(formData);
            window.alert(result.message);

            setErrors({});
            setNombre('');
            setTipo('');
            setDescripcion('');
            setPlanEstudio('');
            setModalidad('');
            setCupo('');
            setFechaInscripcion('');
            setDuracionAnio(0);
            setDuracionMeses(0);
            setDuracionSemanas(0);
            setEstado(1);

        } catch (error) {
            try {
                const errorMessages = JSON.parse(error.message);
                const formattedErrors = handleApiErrors(errorMessages);
                setErrors(formattedErrors);
            } catch (parseError) {
                console.error('Error al parsear los errores:', parseError);
            }
        }
    };

    const handleApiErrors = (errorArray) => {
        const errors = {};
        errorArray.forEach((error) => {
            errors[error.path] = error.msg; 
        });
        return errors;
    };

    return (
        <>
            <button>
                <Link to={`/instituciones/${id_institucion}/carreras`}>Volver</Link>
            </button>
            <h1>Crear carrera</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        placeholder='Nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
                </div>
                <div>
                    <label>Tipo</label>
                    <input
                        placeholder='Tipo (Grado/Técnico)'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    {errors.tipo && <p style={{ color: 'red' }}>{errors.tipo}</p>}
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea
                        placeholder='Descripción'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    {errors.descripcion && <p style={{ color: 'red' }}>{errors.descripcion}</p>}
                </div>
                <div>
                    <label>Plan de Estudio</label>
                    <input
                        placeholder='Plan de Estudio'
                        value={planEstudio}
                        onChange={(e) => setPlanEstudio(e.target.value)}
                    />
                    {errors.plan_estudio && <p style={{ color: 'red' }}>{errors.plan_estudio}</p>}
                </div>
                <div>
                    <label>Modalidad</label>
                    <select
                        value={modalidad}
                        onChange={(e) => setModalidad(e.target.value)}
                    >
                        <option value="">Seleccionar modalidad</option>
                        <option value="virtual">Virtual</option>
                        <option value="presencial">Presencial</option>
                        <option value="mixta">Mixta</option>
                    </select>
                    {errors.modalidad && <p style={{ color: 'red' }}>{errors.modalidad}</p>}
                </div>
                <div>
                    <label>Cupos</label>
                    <input
                        placeholder='Cupos'
                        type='number'
                        value={cupo}
                        onChange={(e) => setCupo(e.target.value)}
                    />
                    {errors.cupo && <p style={{ color: 'red' }}>{errors.cupo}</p>}
                </div>
                <div>
                    <label>Fecha de Inscripción</label>
                    <input
                        placeholder='Fecha de Inscripción'
                        type='date'
                        value={fechaInscripcion}
                        onChange={(e) => setFechaInscripcion(e.target.value)}
                    />
                    {errors.fecha_inscripcion && <p style={{ color: 'red' }}>{errors.fecha_inscripcion}</p>}
                </div>
                <div>
                    <label>Duración (Años)</label>
                    <input
                        placeholder='Duración (Años)'
                        type='number'
                        value={duracionAnio}
                        onChange={(e) => setDuracionAnio(e.target.value)}
                    />
                </div>
                <div>
                    <label>Duración (Meses)</label>
                    <input
                        placeholder='Duración (Meses)'
                        type='number'
                        value={duracionMeses}
                        onChange={(e) => setDuracionMeses(e.target.value)}
                    />
                </div>
                <div>
                    <label>Duración (Semanas)</label>
                    <input
                        placeholder='Duración (Semanas)'
                        type='number'
                        value={duracionSemanas}
                        onChange={(e) => setDuracionSemanas(e.target.value)}
                    />
                </div>
                <button type='submit'>Crear</button>
            </form>
        </>
    );
}

export { CreateCarrera };
