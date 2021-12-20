const Card = (props) => {
    // console.log(props);
    const { coverImg, location, title, price, stats: {rating, reviewCount}, openSpots } = props;

    let badgeText = "";
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = location;
    }

    return (
        <div className="card">
           <div className="card-badge">{badgeText}</div>
            <img
                src={`../images/${coverImg}`}
                className="card-img"
                alt="some view"
            />
            <div className="card-stats">
                <img
                    src="../images/star.png"
                    className="card-icon"
                    alt="star icon"
                />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p className="card-price">
                {price}
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
};

export default Card;
