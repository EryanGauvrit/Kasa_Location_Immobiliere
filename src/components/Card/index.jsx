import { Link } from "react-router-dom";
import LocationsDatas from '../../datas/locationsList.json';

function Card() {

    return (
        <section className="card-list">
            {
                // On boucle pour ressortir les données du fichier JSON
                LocationsDatas.map((location) =>
                    <Link className="card" to={"/location/" + location.id} key={location.id}>
                        <p>{location.title}</p>
                        <img src={location.cover} alt={location.title} />
                    </Link>
                )
            }
        </section>
    );
}

export default Card;