import React from "react";
import bannerBg from '../../assets/banner.png';

function Banner() {

    return (
        <div>
            <img src={bannerBg} alt="Bannière" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;