import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import locationsDatas from '../../datas/locationsList.json';
import Tags from "./Tags";
import Rate from "./Rate";
import Collapse from "../Collapse";
import Error from "../Error";

function LocationDatas({ title, description }) {
    const { id } = useParams();
    const [location, setLocation] = useState({
        host: { name: "", picture: "" },
        rating: "",
        location: "",
        equipments: [],
        tags: []
    });

    useEffect(() => {
        locationsDatas.map((data) => {
            if (data.id === id) {
                setLocation(data)
            }
            return null
        });
    });

    if (location.title === undefined) {
        return <Error />;
    }

    let locationEquipment = location.equipments.map((i, index) => (
        <li className="location-equipments" key={i}>
            {location.equipments[index]}
        </li>
    ));

    return (
        <section className="location-datas-bloc">
            <figure className="location-datas-general">
                <div className="location-datas-info">
                    <h1>{location.title}</h1>
                    <h2>{location.location}</h2>
                    <ul className="datas-info-tags">
                        <Tags location={location} />
                    </ul>
                </div>

                <figcaption className="datas-profil">
                    <div className="datas-profil-profil">
                        <h3>{location.host.name}</h3>
                        <img
                            src={location.host.picture}
                            alt="Profil du diffuseur de l'annonce"
                        />
                    </div>

                    <div className="datas-profil-rate">
                        <Rate location={location.rating} />
                    </div>
                </figcaption>
            </figure>

            <div className="location-datas-detail">
                <Collapse
                    about={false}
                    title="Description"
                    text={location.description}
                />
                <Collapse
                    about={false}
                    title="Equipements"
                    text={<ul>{locationEquipment}</ul>}
                />
            </div>
        </section>
    )
}

export default LocationDatas;