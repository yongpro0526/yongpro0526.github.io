import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header-logo">
                <h1>이용훈</h1>
            </NavLink>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li><NavLink to="/about/introduce">About</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><button type="button" aria-label="다크모드전환">다크모드</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;