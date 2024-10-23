/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInstituciones } from '../../instituciones/hooks/useInstituciones';

const RegisterAdmin = () => {
    const [nombre, setNombre] = useState('');
    const [clave, setClave] = useState('');
    const [institucionId, setInstitucionId] = useState('');
    const { instituciones } = useInstituciones();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const adminData = { nombre, clave, id_institucion: institucionId };

        try {
            const response = await fetch('http://localhost:8000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(adminData),
            });

            const data = await response.json(); 

            if (response.ok) {
                window.alert("Admin registrado con éxito.");
            } else {
                setError(data.message || 'Error al registrar administrador');
            }
        } catch (err) {
            setError('Error en el servidor');
        }
    };

    return (
        <div>
            <h2>Registrar Administrador</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="clave">Clave</label>
                    <input
                        type="password"
                        id="clave"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="institucion">Institución</label>
                    <select
                        id="institucion"
                        value={institucionId}
                        onChange={(e) => setInstitucionId(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una institución</option>
                        {instituciones.map((institucion) => (
                            <option key={institucion.id} value={institucion.id}>
                                {institucion.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Registrar Administrador</button>
            </form>
        </div>
    );
};

export { RegisterAdmin };
