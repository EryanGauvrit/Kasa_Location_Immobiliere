import React from "react";
import bannerBg from '../../assets/banner.png';

function Banner() {

    return (
        <div className="banner">
            <img src={bannerBg} alt="Bannière" />
            <h1>Chez vous,<br /> partout et ailleurs</h1>
        </div>
    );
}

export default Banner;