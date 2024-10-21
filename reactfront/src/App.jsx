import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeInstituciones } from "./instituciones/pages/HomeInstituciones";
import { CreateInstitucion } from "./instituciones/pages/CreateInstitucion";
import { UpdateInstitucion } from "./instituciones/pages/UpdateInstitucion";
import { HomeCarreras } from "./carreras/pages/HomeCarreras";
import { CreateCarrera } from "./carreras/pages/CreateCarreras";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/instituciones" element={<HomeInstituciones />} />
                <Route path="/instituciones/create" element={<CreateInstitucion />} />
                <Route path="/instituciones/:id/update" element={<UpdateInstitucion />} />
                <Route path="/instituciones/:id_institucion/carreras" element={<HomeCarreras />} />
                <Route path="/instituciones/:id_institucion/carreras/create" element={<CreateCarrera />} />
                {/* <Route path="/instituciones/:id_institucion/carreras/:id/update" element={<UpdateCarreras />} /> */}

            </Routes>
        </Router>
    );
};

export { App };
