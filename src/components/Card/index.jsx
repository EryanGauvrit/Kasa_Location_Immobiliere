import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card() {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('./datas/locationsList.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (res) {
                console.log(res)
                return res.json();
            })
            .then(function (locationsDatas) {
                console.log(locationsDatas)
                setData(locationsDatas)
            })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="card-list">
            {
                data && data.length > 0 && data.map((item) =>
                    <Link className="card" to={"/location/" + item.id} key={item.id}>
                        <p>{item.title}</p>
                        <img src={item.cover} alt={item.title} />
                    </Link>
                )
            }
        </section>
    );
}

export default Card;