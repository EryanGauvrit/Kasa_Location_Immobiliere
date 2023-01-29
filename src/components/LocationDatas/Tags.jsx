import React from "react";

function Tags({ location }) {

    const tag = location?.tags || [];
    const tagMap = tag.map((event, index) => (
        <li key={event}>{location.tags[index]}</li>
    ))

    return (
        <React.Fragment className="tag">
            {tagMap}
        </React.Fragment>
    )

}

export default Tags;