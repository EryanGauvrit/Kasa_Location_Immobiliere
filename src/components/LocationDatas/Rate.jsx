import React from "react";
import starFull from "../../assets/starfull.png";
import starEmpty from "../../assets/starempty.png";

function Rate({ location }) {

    // On initialise un tableau des notes possibles
    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
            { // On utilise .map sur la variable en fonction de la donnée en paramètre 
                ratingScore.map((element) =>

                    // On affiche une étoile pleine suivant la valeur en paramère
                    location >= element ? (
                        <img
                            src={starFull}
                            alt="Etoile pleine"
                            key={element.toString()}
                        />
                    ) : (
                        // Par défaut on complète par une étoile vide
                        <img
                            src={starEmpty}
                            alt="Etoile vide"
                            key={element.toString()}
                        />
                    )
                )}
        </React.Fragment>
    )
}

export default Rate;