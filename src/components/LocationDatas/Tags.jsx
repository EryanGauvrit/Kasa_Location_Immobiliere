import React from "react";

function Tags({ location }) {

    // On mets les tags dans une constante, et par défault si les données sont introuvable, on renvoie un tableau vide
    const tag = location?.tags || [];
    // On map et on affiche les données dans une liste
    const tagMap = tag.map((event, index) => (
        <li key={event}>{location.tags[index]}</li>
    ))

    return (
        <React.Fragment>
            {tagMap}
        </React.Fragment>
    )

}

export default Tags;