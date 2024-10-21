import { Link, useParams } from "react-router-dom";
import { useCarreras } from "../hooks/useCarreras";
import { useEffect } from "react";

const HomeCarreras = () => {
    const { carreras, setCarreras, deleteCarreras, showCarreras } = useCarreras();
    const { id_institucion } = useParams(); 

    const handleDelete = async (id) => {
        await deleteCarreras(id);
        window.alert("Carrera eliminada con exito");
        setCarreras(carreras.filter(carrera => carrera.id !== id));
    };

    useEffect(() => {
        const fetchCarreras = async () => {
            await showCarreras(id_institucion);
        };

        fetchCarreras();
    }, [id_institucion]);

    return (
        <>
            <button>
                <Link to={`/instituciones`}>Volver</Link>
            </button>
            <h1>Carreras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Descripcion</th>
                        <th>Plan de estudio</th>
                        <th>Modalidad</th>
                        <th>Cupos</th>
                        <th>Fecha de Inscripcion</th>
                        <th>Duracion Años</th>
                        <th>Duracion Meses</th>
                        <th>Duracion Semanas</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carreras.map( carreras => (
                            <tr key={carreras.id}>
                                <td>{carreras.nombre}</td>
                                <td>{carreras.tipo}</td>
                                <td>{carreras.descripcion}</td>
                                <td>{carreras.plan_estudio}</td>
                                <td>{carreras.modalidad}</td>
                                <td>{carreras.cupo}</td>
                                <td>{carreras.fecha_inscripcion}</td>
                                <td>{carreras.duracion_anio}</td>
                                <td>{carreras.duracion_meses}</td>
                                <td>{carreras.duracion_semanas}</td>
                                <td>
                                    <button onClick={() => handleDelete(carreras.id)}>Eliminar</button>
                                    <button>
                                        <Link to={`/instituciones/${id_institucion}/carreras/${carreras.id}/update`}>Actualizar</Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <Link to={`/instituciones/${id_institucion}/carreras/create`}>Crear</Link>
           
        
        
        </>

    )
}

export {HomeCarreras}