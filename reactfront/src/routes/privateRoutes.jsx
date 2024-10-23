import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, requiredRole }) => {
  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    return { isAuthenticated: !!token, role: userRole };
  };

  const { isAuthenticated, role } = checkAuthentication();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (Array.isArray(requiredRole)) {
    // eslint-disable-next-line react/prop-types
    const hasRole = requiredRole.includes(role);
    if (!hasRole) {
      return <Navigate to="/" />;
    }
  } else if (role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export { ProtectedRoute };
