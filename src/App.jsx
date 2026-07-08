import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"
import SidebarLayout from "./layouts/SidebarLayout"

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact";
import AboutRoutes from "./routes/AboutRoutes";
import ProjectRoutes from "./routes/ProjectRoutes";


function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route element={<SidebarLayout />}>
                {AboutRoutes}
                <Route path="/projects" element={<Projects />} />
                {ProjectRoutes}
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;