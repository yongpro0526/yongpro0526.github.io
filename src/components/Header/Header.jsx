import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <NavLink to={"/"}><h1>이용훈</h1></NavLink>
            <nav>
                <ul>
                    <li><NavLink to={"/about/introduce"}>About</NavLink></li>
                    <li><NavLink to={"/projects"}>Projects</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><button type="button" aria-label="다크모드전환">다크모드</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;