import { Navigate, useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, requiredRole }) => {
  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    return !!token; 
  };

  const isAuthenticated = checkAuthentication();

  const userRole = localStorage.getItem('role'); 
  const userInstitutionId = localStorage.getItem('id_institucion'); 
  const { id_institucion } = useParams(); 

  // eslint-disable-next-line react/prop-types
  const hasRequiredRole = requiredRole.includes(userRole);

  const canAccessInstitution = userInstitutionId === id_institucion;

  return isAuthenticated && hasRequiredRole && canAccessInstitution ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export { ProtectedRoute };
