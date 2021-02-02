import { Link } from "react-router-dom";

const Card = ({ title, desc, image }) => {
    return <div>
        <h2> Titre : {title} </h2 >
        <p>Description : {desc} </p>
        <img src={image} alt={title} />
        <Link to="/card">Lien vers card</Link>
    </div>
};

export default Card