const Card = () => {
    return (
        <div className="card">
            <img
                className="card-img"
                src="../images/katie-zaferes.png"
                alt="Katie Zaferes"
            />
            <div className="card-stats">
                <img
                    className="card-icon"
                    src="../images/star.png"
                    alt="Star Icon"
                />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="card-title">Life leesons with Katie Zaferes</p>
            <p className="card-price">
                <span className="bold">From $136 </span> / person
            </p>
        </div>
    );
};

export default Card;
