import { useState, useCallback } from "react";
import { useInstituciones } from '../hooks/useInstituciones';
import { Link, useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '40%',
    height: '400px',
};

const center = {
    lat: -29.145751843241126, 
    lng: -59.26261844268319,
};

const CreateInstitucion = () => {
    const { addInstitucion } = useInstituciones();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cue, setCue] = useState('');
    const [ubicacionLat, setUbicacionLat] = useState('');
    const [ubicacionLong, setUbicacionLong] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pagina, setPagina] = useState('');
    const [estado] = useState(1);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBCtJ40rDSG_zsjFFKBL_soOwXT-8vHD9U', // Asegúrate de tener tu API key
    });

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
            estado
        };

        try {
            const result = await addInstitucion(formData);
            window.alert(result.message);

            setErrors({});
            setNombre('');
            setCorreo('');
            setDireccion('');
            setCue(0);
            setUbicacionLat(0.0);
            setUbicacionLong(0.0);
            setTelefono('');
            setPagina('');

        } catch (error) {
            const errorMessages = JSON.parse(error.message);  
            const formattedErrors = handleApiErrors(errorMessages); 
            setErrors(formattedErrors); 
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
        localStorage.removeItem('id_institucion');
        navigate('/login');
    };

    const onMapClick = useCallback((event) => {
        setUbicacionLat(event.latLng.lat());
        setUbicacionLong(event.latLng.lng());
    }, []);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <button onClick={handleLogout}>Cerrar sesion</button>
            <br />
            <br /> 
            <button>
                <Link to={`/instituciones`}>Volver</Link>
            </button>
            <h1>Crear institucion</h1>
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

                <div style={{ marginTop: '20px' }}>
                    <h2>Selecciona la ubicación en el mapa:</h2>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                        onClick={onMapClick}
                    >
                        {ubicacionLat && ubicacionLong && (
                            <Marker position={{ lat: parseFloat(ubicacionLat), lng: parseFloat(ubicacionLong) }} />
                        )}
                    </GoogleMap>
                </div>

                <button type='submit'>Crear</button>
            </form>
        </>
    );
}

export { CreateInstitucion };
