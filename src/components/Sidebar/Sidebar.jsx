import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const isProjects = location.pathname.startsWith("/projects");
    const isAbout = location.pathname.startsWith("/about");
    const isContact = location.pathname.startsWith("/contact");

    let title = "";
    let items = [];

    if (isProjects) {
        title = "Projects";
        items = [
            { label: "On-Sil", path: "/projects/on-sil" },
            { label: "Java Bean", path: "/projects/java-bean" },
            { label: "ChaJava", path: "/projects/chajava" },
        ];
    }

    if (isAbout) {
        title = "About";
        items = [
            { label: "Introduce", path: "/about/introduce" },
            { label: "TechStack", path: "/about/tech-stack" },
        ];
    }

    if (isContact) {
        title = "Contact";
        items = [
            { label: "Contact info", path: "/contact" }
        ]
    }

  return (
        <aside>
            <h2>{title}</h2>
            <nav>
                <ul>
                    {items.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;