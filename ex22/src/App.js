import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Urshifu (Rapid Strike)",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/urshifu-rapid-strike.avif",
    buttonText: "Water/Fighting",
    buttonColor: "primary"
  },
  {
    id: 2,
    title: "Rillaboom",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/rillaboom.avif",
    buttonText: "Grass",
    buttonColor: "success"
  },
  {
    id: 3,
    title: "Ninetales (Alolan)",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/ninetales-alolan.avif",
    buttonText: "Ice/Fairy",
    buttonColor: "info"
  },
  {
    id: 4,
    title: "Miraidon",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/miraidon.avif",
    buttonText: "Electric/Dragon",
    buttonColor: "warning"
  },
  {
    id: 5,
    title: "Incineroar",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/incineroar.avif",
    buttonText: "Fire/Dark",
    buttonColor: "danger"
  },
  {
    id: 6,
    title: "Gholdengo",
    image: "https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/gholdengo.avif",
    buttonText: "Steel/Ghost",
    buttonColor: "secondary"
  }
];

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Popular Competitive Pokemon</h1>
      <p className="text-center mb-5 text-muted">A list of most commonly used Pokemon in a competetive setting.</p>
      
      {/* Bootstrap Grid System */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cardData.map((card) => (
          <div className="col" key={card.id}>
            {/* Bootstrap Card Component */}
            <div className="card h-100 shadow-sm border-0">
              {/* Card Image */}
              <img 
                src={card.image} 
                className="card-img-top img-fluid" 
                alt={card.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              
              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.description}</p>
                
                {/* Card Footer with Button */}
                <div className="mt-auto">
                  <button className={`btn btn-${card.buttonColor} w-100`}>
                    {card.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Optional Badge */}
              <div className="position-absolute top-0 end-0 m-2">
                <span className="badge bg-light text-dark">New</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Information Section */}
      
    </div>
  );
}

export default App;