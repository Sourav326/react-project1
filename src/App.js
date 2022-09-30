
import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './components/data';
import test from "./assets/heroimage.png"


function App() {
  const cards = data.map(item => {
    return(
      <Card
      {...item}
      />
      // <Card img={item.coverImg}
      //   rating={item.stats.rating}
      //   reviewCount={item.stats.reviewCount}
      //   location={item.location}
      //   title={item.title}
      //   price={item.price}
      // />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="overflow-x-scroll flex px-5 py-8">
        {cards}
      </div>
      <Hero />
    </div>
  );
}

export default App;
