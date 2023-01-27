import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import locationsDatas from '../../datas/locationsList.json';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Slideshow() {
    const { id } = useParams();
    const [location, setLocation] = useState({
        pictures: [],
        description: "",
        host: { name: "", picture: "" },
        rating: "",
        location: "",
        equipement: [],
        tags: []
    });

    useEffect(() => {
        locationsDatas.map((data) => {
            if (data.id === id) {
                setLocation(data);
            }
            return null;
        })
    });
    /********** Gestion des images **********/

    const picturesLength = location.pictures.length; // on récupère la taille du tableau d'images
    const [currentPicture, setCurrentPicture] = useState(0); // on initialise un état à 0 pour l'image actuelle

    /* Conditions affichage images selon les requirements */
    const nextPicture = () => {
        setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
    }
    const prevPicture = () => {
        setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
    }

    /* Gestion des chevrons */

    let chevron = "activeChevron"; // par défault ils sont activé

    if (picturesLength === 1) {
        chevron = "notActiveChevron";
    }

    return (
        <section className="picture-gallery">
            {location.pictures.map((l, index) => {
                return (
                    <article
                        className={index === currentPicture ? "picture active" : "picture"}
                        key={index}

                    >
                        {index === currentPicture && (
                            <div
                                className="currentPicture-box"
                                style={{
                                    backgroundImage: `url(${location.pictures[index]})`
                                }}
                            >
                                <FiChevronLeft className={chevron} onClick={prevPicture} />
                                <FiChevronRight className={chevron} onClick={nextPicture} />

                            </div>

                        )}
                    </article>
                );
            })}

        </section>
    )
}

export default Slideshow;