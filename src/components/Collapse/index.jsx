import { useState } from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

function Collapse({ title, text, about }) {

    // Variable d'état initialisée à false
    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    return (
        // On gère la classe en fonction de si on a cliqué dessus ou non
        <div className={`${about ? "about-collapse" : "collapse"} ${isActive && "active"}`} >
            <div className="about-collapse-title" onClick={handleToggle}>
                <p>{title}</p>
                {chevron}
            </div>
            <div className="about-collapse-text">{text}</div>
        </div>
    );
}

export default Collapse;