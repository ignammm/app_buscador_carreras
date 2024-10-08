export const useDelete = (uri) => {
    const deleteItem = async (id) => {
        try {
            const response = await fetch(`${uri}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el elemento');
            }
            window.location.reload(); 
        } catch (error) {
            console.error(error);
        }
    };

    return deleteItem;
};
