import React from "react";
import { useEffect, useState } from "react";
import { useInstituciones } from "../hooks/useInstituciones";

const HomeInstituciones = () => {
    const { instituciones, setInstituciones, deleteInstitucion, error} = useInstituciones()


    const handleDelete = async (id) => {
        const result = await deleteInstitucion(id);
        window.alert(result.message)

        setInstituciones(instituciones.filter(institucion => institucion.id !== id));
    };
    

    return (
        <>
            <h1>Instituciones</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>CUE</th>
                        <th>Longitud</th>
                        <th>Latitud</th>
                        <th>Telefono</th>
                        <th>Pagina</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instituciones.map( institucion => (
                            <tr key={institucion.id}>
                                <td>{institucion.nombre}</td>
                                <td>{institucion.correo}</td>
                                <td>{institucion.direccion}</td>
                                <td>{institucion.cue}</td>
                                <td>{institucion.ubicacion_lat}</td>
                                <td>{institucion.ubicacion_long}</td>
                                <td>{institucion.telefono}</td>
                                <td>{institucion.pagina}</td>
                                <td>
                                    <button onClick={() => handleDelete(institucion.id)}>Eliminar</button>
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
           
        
        
        </>

    )
}

export {HomeInstituciones}
