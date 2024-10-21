import { useState, useEffect } from 'react';

const useInstituciones = () => {
    const [instituciones, setInstituciones] = useState([]);
    const [error] = useState(null);
    const URI = 'http://localhost:8000/instituciones'
   
    const showInstituciones = async () => {
        try {
            const url = URI
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
            const url = URI
            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify(institucion)
                
            })

            if (!result.ok) {
                const errorData = await result.json()
                throw new Error(JSON.stringify(errorData.message));
            }

            const data = await result.json()
            return data;

        } catch (error) {
        
            throw new Error(error.message);
        }
        
        
        
    };

     const updateInstitucion = async (id, institucion) => { 
         try {
            const url = `${URI}/${id}`; 
            const result = await fetch(url, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(institucion)
            });

             if (!result.ok) { 
                const errorData = await result.json();
                throw new Error(JSON.stringify(errorData.message));
            }

            const data = await result.json();
            setInstituciones(instituciones.map(inst => inst.id === id ? data.institucion : inst)); 
            return;
        } catch (error) {
    
            throw new Error(error.message);
        }
    };


    const deleteInstitucion = async (id) => {
        try {
            const url = `${URI}/${id}`
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
        setInstituciones,
        addInstitucion,
        updateInstitucion,
        deleteInstitucion
    };
};

export {useInstituciones};
