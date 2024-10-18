import React from "react";
import { useState, useEffect } from "react";
import useInstituciones from './hooks/useInstituciones';

const CreateInstitucion = () => {
    const { error, addInstitucion } = useInstituciones();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cue, setCue] = useState(0);
    const [ubicacionLat, setUbicacionLat] = useState(0.0);
    const [ubicacionLong, setUbicacionLong] = useState(0.0);
    const [telefono, setTelefono] = useState('');
    const [pagina, setPagina] = useState('');
    const [estado, setEstado] = useState(1);

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

        const result = await addInstitucion(formData);
        window.alert(result.message)

        setNombre('');
        setCorreo('');
        setDireccion('');
        setCue(0);
        setUbicacionLat(0.0);
        setUbicacionLong(0.0);
        setTelefono('');
        setPagina('');

    };
    
    

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input
                            placeholder='Nombre'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Correo</label>
                        <input
                            placeholder='Correo'
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input
                            placeholder='Dirección'
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>CUE</label>
                        <input
                            placeholder='CUE'
                            type='number'
                            value={cue}
                            onChange={(e) => setCue(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Ubicación Latitud</label>
                        <input
                            placeholder='Ubicación Latitud'
                            type='number'
                            value={ubicacionLat}
                            onChange={(e) => setUbicacionLat(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Ubicación Longitud</label>
                        <input
                            placeholder='Ubicación Longitud'
                            type='number'
                            value={ubicacionLong}
                            onChange={(e) => setUbicacionLong(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input
                            placeholder='Teléfono'
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Página</label>
                        <input
                            placeholder='Página'
                            value={pagina}
                            onChange={(e) => setPagina(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Crear</button>
                </form>
            </>
        )
    }

export {CreateInstitucion}