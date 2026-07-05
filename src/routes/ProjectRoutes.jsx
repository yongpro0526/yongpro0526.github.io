import { Route } from "react-router-dom";

import OnSil from "../pages/projects/OnSil/OnSil";
import JavaBean from "../pages/projects/JavaBean/JavaBean";
import ChaJava from "../pages/projects/ChaJava/ChaJava";

const ProjectRoutes = (
    <>
        <Route path="/projects/on-sil" element={<OnSil />} />
        <Route path="/projects/java-bean" element={<JavaBean />} />
        <Route path="/projects/chajava" element={<ChaJava />} />
    </>
);

export default ProjectRoutes