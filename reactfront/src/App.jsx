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

const App = () => {
    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<SearchCarreras/>} />
                <Route path="/login" element={<Login />} />
                
                <Route 
                    path="/instituciones" 
                    element={
                        <ProtectedRoute>
                            <HomeInstituciones />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/instituciones/create" 
                    element={
                        <ProtectedRoute>
                            <CreateInstitucion />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/instituciones/:id/update" 
                    element={
                        <ProtectedRoute>
                            <UpdateInstitucion />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/instituciones/:id_institucion/carreras" 
                    element={
                        <ProtectedRoute>
                            <HomeCarreras />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/instituciones/:id_institucion/carreras/create" 
                    element={
                        <ProtectedRoute>
                            <CreateCarrera />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/instituciones/:id_institucion/carreras/:id/update" 
                    element={
                        <ProtectedRoute>
                            <UpdateCarrera />
                        </ProtectedRoute>
                    } 
                />

            </Routes>
        </Router>
    );
};

export { App };
