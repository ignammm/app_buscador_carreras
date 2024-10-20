import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeInstituciones } from "./instituciones/pages/HomeInstituciones";
import { CreateInstitucion } from "./instituciones/pages/CreateInstitucion";
import { UpdateInstitucion } from "./instituciones/pages/UpdateInstitucion";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/instituciones" element={<HomeInstituciones />} />
                <Route path="/instituciones/create" element={<CreateInstitucion />} />
                <Route path="/instituciones/update/:id" element={<UpdateInstitucion />} /> 
            </Routes>
        </Router>
    );
};

export { App };
