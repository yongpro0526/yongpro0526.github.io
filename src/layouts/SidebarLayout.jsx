import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import Sidebar from "../components/Sidebar/Sidebar"

function SidebarLayout() {
  return (
        <>
            <Header />
            <div className="layout">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default SidebarLayout;