import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} alt='Kasa' className="kasa-logo" /></Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;