import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useInstituciones } from '../hooks/useInstituciones';
import { Link } from "react-router-dom";

const UpdateInstitucion = () => {
    const { id } = useParams();
    const { instituciones, updateInstitucion } = useInstituciones();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cue, setCue] = useState('');
    const [ubicacionLat, setUbicacionLat] = useState('');
    const [ubicacionLong, setUbicacionLong] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pagina, setPagina] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        const fetchInstitucion = () => {
        
            const institucion = instituciones.find(inst => inst.id === parseInt(id));
           
            if (institucion) {
                setNombre(institucion.nombre || '');  
                setCorreo(institucion.correo || '');
                setDireccion(institucion.direccion || '');
                setCue(institucion.cue || '');
                setUbicacionLat(institucion.ubicacion_lat || ''); 
                setUbicacionLong(institucion.ubicacion_long || '');
                setTelefono(institucion.telefono || '');
                setPagina(institucion.pagina || '');
            }
        };

        fetchInstitucion();
    }, [id, instituciones]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nombre,
            correo,
            direccion,
            cue,
            ubicacion_lat: ubicacionLat,
            ubicacion_long: ubicacionLong,
            telefono,
            pagina,
        };

        try {
            await updateInstitucion(id, formData); 
            window.alert("Institución actualizada con éxito");
            navigate('/instituciones');
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
                <Link to={`/instituciones`}>Volver</Link>
            </button>
            <h1>Actualizar Institución</h1>
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
                    <label>Correo</label>
                    <input
                        placeholder='Correo'
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    {errors.correo && <p style={{ color: 'red' }}>{errors.correo}</p>}
                </div>
                <div>
                    <label>Dirección</label>
                    <input
                        placeholder='Dirección'
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                    {errors.direccion && <p style={{ color: 'red' }}>{errors.direccion}</p>}
                </div>
                <div>
                    <label>CUE</label>
                    <input
                        placeholder='CUE'
                        type='number'
                        value={cue}
                        onChange={(e) => setCue(e.target.value)}
                    />
                    {errors.cue && <p style={{ color: 'red' }}>{errors.cue}</p>}
                </div>
                <div>
                    <label>Ubicación Latitud</label>
                    <input
                        placeholder='Ubicación Latitud'
                        type='number'
                        value={ubicacionLat}
                        onChange={(e) => setUbicacionLat(e.target.value)}
                    />
                    {errors.ubicacion_lat && <p style={{ color: 'red' }}>{errors.ubicacion_lat}</p>}
                </div>
                <div>
                    <label>Ubicación Longitud</label>
                    <input
                        placeholder='Ubicación Longitud'
                        type='number'
                        value={ubicacionLong}
                        onChange={(e) => setUbicacionLong(e.target.value)} 
                    />
                    {errors.ubicacion_long && <p style={{ color: 'red' }}>{errors.ubicacion_long}</p>}
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        placeholder='Teléfono'
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    {errors.telefono && <p style={{ color: 'red' }}>{errors.telefono}</p>}
                </div>
                <div>
                    <label>Página</label>
                    <input
                        placeholder='Página'
                        value={pagina}
                        onChange={(e) => setPagina(e.target.value)}
                    />
                    {errors.pagina && <p style={{ color: 'red' }}>{errors.pagina}</p>}
                </div>
                <button type='submit'>Actualizar</button>
            </form>
        </div>
    );
};

export { UpdateInstitucion };
