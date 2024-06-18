import './App.css';
import Navbar from './component/navbar.js'
import Hero from './component/hero.js'
import Card from './component/card.js'
import data from './component/data.js';

const cards = data.map(item => {
  return (
      <Card 
          key={item.id}
          {...item}  //send item to props same as given names in data 

          // item={item} //creates another object item to hold item's value

          // img={item.coverImg}
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpot={item.openSpots}
      />
  )
})        
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="section">
      {cards}
      </div>
    </div>
  );
}
