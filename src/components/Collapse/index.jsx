import { useState } from "react";
const chevron = <i class="fa-solid fa-chevron-up"></i>;

function Collapse({ title, text, about }) {

    // Variable d'état initialisée à false
    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    return (
        <section className={`${about ? "about-collapse" : "collapse"} ${isActive && "active"}`} >
            <div className="about-collapse-title" onClick={handleToggle}>
                <p>{title}</p>
                {chevron}
            </div>
            <p className="about-collapse-text">{text}</p>
        </section>
    );
}

export default Collapse;