import { Navigate } from 'react-router-dom'; 

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const checkAuthentication = () => {
    const token = localStorage.getItem('token'); 
    return !!token; 
  };

  const isAuthenticated = checkAuthentication();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export {ProtectedRoute};
