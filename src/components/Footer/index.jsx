import React from "react";
import logoFooter from '../../assets/logo-footer.png';

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="Kasa" />
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;