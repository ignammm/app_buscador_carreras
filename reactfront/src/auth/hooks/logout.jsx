import { useNavigate } from 'react-router-dom';

const logout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    localStorage.removeItem('token');
    navigate('/login');
  
};

export {logout}
