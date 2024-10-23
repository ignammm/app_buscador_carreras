import { Link, useNavigate } from "react-router-dom";
import { useInstituciones } from "../hooks/useInstituciones";



const HomeInstituciones = () => {
    const { instituciones, setInstituciones, deleteInstitucion } = useInstituciones();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const result = await deleteInstitucion(id);
        window.alert(result.message)

        setInstituciones(instituciones.filter(institucion => institucion.id !== id));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <>
            <button onClick={handleLogout}>Cerrar sesion</button>
            <br />
            <br /> 
            
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
                                    <button>
                                        <Link to={`/instituciones/${institucion.id}/update`}>Actualizar</Link>
                                    </button>
                                    <button>
                                        <Link to={`/instituciones/${institucion.id}/carreras`}>Carreras</Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <Link to={'/instituciones/create'}>Crear</Link>
           
        
        
        </>

    )
}

export {HomeInstituciones}
