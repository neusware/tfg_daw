import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem("token"); // Asegúrate de manejar la autenticación

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
