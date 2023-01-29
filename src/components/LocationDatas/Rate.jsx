import React from "react";
import starFull from "../../assets/starfull.png";
import starEmpty from "../../assets/starempty.png";

function Rate({ location }) {
    const ratingScore = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
            {ratingScore.map((element) =>
                location >= element ? (
                    <img
                        src={starFull}
                        alt="Etoile pleine"
                        key={element.toString()}
                    />
                ) : (
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