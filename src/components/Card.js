const Card = ({img, country, title, price, rating, reviewCount}) => {
    return (
        <div className="card">
            <img src={`../images/${img}`} className="card-img" alt="some view" />
            <div className="card-stats">
                <img src="../images/star.png" className="card-icon" alt="star icon" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p>
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
};

export default Card;
