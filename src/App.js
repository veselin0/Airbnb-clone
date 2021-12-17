import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js";

function App() {
    const cardElement = Data.map((datum) => {
        const {
            id,
            coverImg,
            location,
            title,
            price,
            stats: { rating, reviewCount },
        } = datum;
        return (
            <Card
                key={id}
                img={coverImg}
                rating={rating}
                reviewCount={reviewCount}
                country={location}
                title={title}
                price={price}
            />
        );
    });

    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <section className="cards-list">{cardElement}</section>
        </div>
    );
}

export default App;
