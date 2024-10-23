import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCarreras } from '../hooks/useCarreras';
import { Link } from "react-router-dom";

const UpdateCarrera = () => {
    const { id } = useParams();
    const { id_institucion } = useParams();
    const { carreras, updateCarreras , getCarreraById } = useCarreras();
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [planEstudio, setPlanEstudio] = useState('');
    const [modalidad, setModalidad] = useState(''); 
    const [cupo, setCupo] = useState('');
    const [fechaInscripcion, setFechaInscripcion] = useState('');
    const [duracionAnio, setDuracionAnio] = useState('');
    const [duracionMeses, setDuracionMeses] = useState('');
    const [duracionSemanas, setDuracionSemanas] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        const fetchCarrera = async () => {                   
            const carrera = await getCarreraById(id); 
            
            if (carrera) {
                setNombre(carrera.nombre);
                setTipo(carrera.tipo);
                setDescripcion(carrera.descripcion);
                setPlanEstudio(carrera.plan_estudio);
                setModalidad(carrera.modalidad);
                setCupo(carrera.cupo);
                setFechaInscripcion(carrera.fecha_inscripcion.split('T')[0]); 
                setDuracionAnio(carrera.duracion_anio);
                setDuracionMeses(carrera.duracion_meses);
                setDuracionSemanas(carrera.duracion_semanas);
            }
        };

        fetchCarrera();
    }, [id, carreras]);

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
        };

        try {
            await updateCarreras(id, formData);
            window.alert("Carrera actualizada con éxito");
            navigate(`/instituciones/${id_institucion}/carreras`);
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

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Cerrar sesion</button>
            <br />
            <br /> 
            <button>
                <Link to={`/instituciones/${id_institucion}/carreras`}>Volver</Link>
            </button>
            <h1>Actualizar Carrera</h1>
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
                        placeholder='Tipo'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    {errors.tipo && <p style={{ color: 'red' }}>{errors.tipo}</p>}
                </div>
                <div>
                    <label>Descripción</label>
                    <input
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
                        <option value="presencial">Presencial</option>
                        <option value="virtual">Virtual</option>
                        <option value="mixta">Mixta</option>
                    </select>
                    {errors.modalidad && <p style={{ color: 'red' }}>{errors.modalidad}</p>}
                </div>
                <div>
                    <label>Cupo</label>
                    <input
                        placeholder='Cupo'
                        value={cupo}
                        onChange={(e) => setCupo(e.target.value)}
                    />
                    {errors.cupo && <p style={{ color: 'red' }}>{errors.cupo}</p>}
                </div>
                <div>
                    <label>Fecha de Inscripción</label>
                    <input
                        type="date"
                        value={fechaInscripcion}
                        onChange={(e) => setFechaInscripcion(e.target.value)}
                    />
                    {errors.fecha_inscripcion && <p style={{ color: 'red' }}>{errors.fecha_inscripcion}</p>}
                </div>
                <div>
                    <label>Duración (Años)</label>
                    <input
                        placeholder='Duración en años'
                        type='number'
                        value={duracionAnio}
                        onChange={(e) => setDuracionAnio(e.target.value)}
                    />
                    {errors.duracion_anio && <p style={{ color: 'red' }}>{errors.duracion_anio}</p>}
                </div>
                <div>
                    <label>Duración (Meses)</label>
                    <input
                        placeholder='Duración en meses'
                        type='number'
                        value={duracionMeses}
                        onChange={(e) => setDuracionMeses(e.target.value)}
                    />
                    {errors.duracion_meses && <p style={{ color: 'red' }}>{errors.duracion_meses}</p>}
                </div>
                <div>
                    <label>Duración (Semanas)</label>
                    <input
                        placeholder='Duración en semanas'
                        type='number'
                        value={duracionSemanas}
                        onChange={(e) => setDuracionSemanas(e.target.value)}
                    />
                    {errors.duracion_semanas && <p style={{ color: 'red' }}>{errors.duracion_semanas}</p>}
                </div>
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    );
};

export { UpdateCarrera };
