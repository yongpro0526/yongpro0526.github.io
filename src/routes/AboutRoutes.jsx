import { Route, Navigate } from "react-router-dom";

import Introduce from "../pages/about/Introduce";
import TechStack from "../pages/about/TechStack";

const AboutRoutes = (
    <>
        <Route
            path="/about"
            element={<Navigate to="/about/introduce" replace />}
        />

        <Route
            path="/about/introduce"
            element={<Introduce />}
        />

        <Route
            path="/about/tech-stack"
            element={<TechStack />}
        />
    </>
);

export default AboutRoutes;