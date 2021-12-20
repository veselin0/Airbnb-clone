import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js";

function App() {
    const cardElement = Data.map((datum) => {
        /*const {
            id,
            coverImg,
            location,
            title,
            price,
            stats: { rating, reviewCount },
            openSpots,
        } = datum;*/
        return (
            <Card
                key={datum.id}
                datum={datum}
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
