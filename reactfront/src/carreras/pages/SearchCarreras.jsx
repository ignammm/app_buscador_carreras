/* eslint-disable no-unused-vars */
import { useCarreras } from "../hooks/useCarreras"; 
import { useInstituciones } from "../../instituciones/hooks/useInstituciones";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchCarreras = () => {
    const { getCarreras } = useCarreras(); 
    const { instituciones } = useInstituciones();
    const [nombre, setNombre] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [selectedCarrera, setSelectedCarrera] = useState('');
    const [selectedInstitucion, setSelectedInstitucion] = useState(''); 
    const [filteredCarreras, setFilteredCarreras] = useState([]);

    useEffect(() => {
        const filterCarreras = async () => {
            let result = await getCarreras();
            console.log(modalidad)
            console.log(selectedInstitucion)
            if (modalidad) {
                result = result.filter(carrera => carrera.modalidad === modalidad);
            }
            console.log(result);
            if (selectedInstitucion) {
                result = result.filter(carrera => carrera.id_institucion === parseInt(selectedInstitucion));
                
            }
            console.log(result)
           
            
            
            setFilteredCarreras(result);
        };

        filterCarreras();
    }, [modalidad, selectedInstitucion]);


    return (
        <>
            <button>
                <Link to={'/login'}>Iniciar Sesion</Link>
            </button>
            <h1>Buscador Carreras Goya</h1>
            <form>
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
                </div>
                <div>
                    <label>Carrera</label>
                    <select
                        value={selectedCarrera.id || ''}
                        onChange={(e) => {
                            const carreraSeleccionada = filteredCarreras.find(carrera => carrera.id === parseInt(e.target.value));
                            setSelectedCarrera(carreraSeleccionada);
                        }}
                        disabled={!modalidad} 
                    >
                        <option value="">Seleccionar carrera</option>
                        {filteredCarreras.map(carrera => (
                            <option key={carrera.id} value={carrera.id}>
                                {carrera.nombre}
                            </option>
                        ))}
                    </select>

                </div>
                <div>
                    <label>Institución</label>
                    <select
                        value={selectedInstitucion} 
                        onChange={(e) => setSelectedInstitucion(e.target.value)}
                        disabled={!modalidad} 
                    >
                        <option value="">Seleccionar institución</option>
                        {instituciones.map(institucion => (
                            <option key={institucion.id} value={institucion.id}>
                                {institucion.nombre}
                            </option>
                        ))}
                    </select>
                </div>

            </form>
            <div>
                <h2>Resultados:</h2>
                <ul key={selectedCarrera.id}>
                    <li>Nombre: {selectedCarrera.nombre}</li>
                    <li>Tipo: {selectedCarrera.tipo}</li>
                    <li>Descripcion: {selectedCarrera.descripcion }</li>
                    <li>Plan de estudio: { selectedCarrera.plan_estudio}</li>
                    <li>Modalidad: {selectedCarrera.modalidad }</li>
                    <li>Cupos: {selectedCarrera.cupo}</li>
                    <li>Fecha inscripcion: {selectedCarrera.fecha_inscripcion }</li>
                    <li>Duracion años: {selectedCarrera.duracion_anio }</li>
                   <li>Duracion meses: {selectedCarrera.duracion_meses }</li>
                   <li>Duracion semanas: {selectedCarrera.duracion_semanas }</li>
                </ul>
            </div>
        </>
    );
};

export { SearchCarreras };
