import { useState } from "react";

const useCarreras = () => {
    const [carreras, setCarreras] = useState([]);
    const URI = 'http://localhost:8000/carreras'

    const showCarreras = async (id_institucion) => {
        try {
            const response = await fetch(`${URI}/${id_institucion}`, {
                method: 'GET',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener las carreras');
            }

            const carreras = await response.json();
            console.log(carreras);
            setCarreras(carreras)
        } catch (error) {
            console.error('Error en showCarreras:', error.message);
        }
    };


    const createCarreras = async (carreraData) => {
        try {
            const response = await fetch(URI, {
                method: 'POST',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carreraData),
            });

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(JSON.stringify(errorData.message));
            }

            const data = await response.json()
            return data;

        } catch (error) {
            throw new Error(error.message);
        }
    };


    const updateCarreras = async (carreraId, carreraData) => {
        try {
            const response = await fetch(`${URI}/${carreraId}`, {
                method: 'PUT',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carreraData),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la carrera');
            }

            const carreraActualizada = await response.json();
            console.log('Carrera actualizada:', carreraActualizada);
            setCarreras(carreras.map(carrera => carrera.id === carreraId ? carreraActualizada.carrera : carrera)); 
            return;
        } catch (error) {
            console.error('Error en updateCarreras:', error.message);
        }
    };


    const deleteCarreras = async (carreraId) => {
        try {
            const response = await fetch(`${URI}/${carreraId}`, {
                method: 'DELETE',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar la carrera');
            }

            console.log(`Carrera con ID ${carreraId} eliminada`);
            return true;
        } catch (error) {
            console.error('Error en deleteCarreras:', error.message);
        }
    };

    return {
        deleteCarreras,
        updateCarreras,
        showCarreras,
        createCarreras,
        carreras,
        setCarreras
    };
};

export {useCarreras}