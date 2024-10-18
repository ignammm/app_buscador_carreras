import { useState, useEffect } from 'react';

const useInstituciones = () => {
    const [instituciones, setInstituciones] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   
   const showInstituciones = async () => {
        try {
            const url = 'http://localhost:8000/instituciones'
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                    
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();
            setInstituciones(data);
            
        } catch (error) {

            console.error('Error:', error.message);
        }
    };
  
    const addInstitucion = async (institucion) => {

        try {
            const url = 'http://localhost:8000/instituciones'
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                body: {
                    body: JSON.stringify(institucion)
                }
            })

            if (!result.ok) {
                const errorData = await result.json()
                throw new Error(errorData.message);
            }

            const data = await result.json()
            return data;

        } catch (error) {

            console.error('Error:', error.message);
        }
        
        
        
    };

    const updateInstitucion = async (institucion) => {

        try {
            const url = 'http://localhost:8000/instituciones'
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                body: {
                    body: JSON.stringify(nuevaInstitucion)
                }
            })
            if (!result.ok) {
                const errorData = await result.json()
                throw new Error(errorData.message);
            }

            const data = await result.json()
            setInstituciones(instituciones.map(inst => inst.id === id ? data : inst));
            return data

        } catch (error) {

            console.error('Error:', error.message);
        }
        
        
        
    };


    const deleteInstitucion = async (id) => {
        try {
            const url = `http://localhost:8000/instituciones/${id}`
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();
            return data

        } catch (error) {

            console.error('Error:', error.message);
        }
    };

    useEffect(() => {
        showInstituciones();
    }, []);

    return {
        instituciones,
        error,
        loading,
        setInstituciones,
        addInstitucion,
        updateInstitucion,
        deleteInstitucion
    };
};

export {useInstituciones};
