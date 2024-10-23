import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeInstituciones } from "./instituciones/pages/HomeInstituciones";
import { CreateInstitucion } from "./instituciones/pages/CreateInstitucion";
import { UpdateInstitucion } from "./instituciones/pages/UpdateInstitucion";
import { HomeCarreras } from "./carreras/pages/HomeCarreras";
import { CreateCarrera } from "./carreras/pages/CreateCarreras";
import { UpdateCarrera } from "./carreras/pages/UpdateCarreras";
import { SearchCarreras } from "./carreras/pages/SearchCarreras";
import { Login } from "./auth/pages/login";
import { ProtectedRoute } from "./routes/privateRoutes";
import { RegisterAdmin } from "./auth/pages/register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchCarreras />} />
                <Route path="/login" element={<Login />} />
                
                <Route
                    path="/instituciones"
                    element={
                        <ProtectedRoute requiredRole="1">
                            <HomeInstituciones />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instituciones/create"
                    element={
                        <ProtectedRoute requiredRole="1">
                            <CreateInstitucion />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instituciones/:id/update"
                    element={
                        <ProtectedRoute requiredRole="1">
                            <UpdateInstitucion />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <ProtectedRoute requiredRole="1">
                            <RegisterAdmin />
                        </ProtectedRoute>
                    }
                />
                
                
                <Route
                    path="/instituciones/:id_institucion/carreras"
                    element={
                        <ProtectedRoute requiredRole={["2", "1"]}>
                            <HomeCarreras />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instituciones/:id_institucion/carreras/create"
                    element={
                        <ProtectedRoute requiredRole={["2", "1"]}>
                            <CreateCarrera />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instituciones/:id_institucion/carreras/:id/update"
                    element={
                        <ProtectedRoute requiredRole={["2", "1"]}>
                            <UpdateCarrera />
                        </ProtectedRoute>
                    }
                />
                
               
            </Routes>
        </Router>
    );
};

export { App };
