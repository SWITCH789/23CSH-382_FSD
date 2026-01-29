import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Starter Pokémon Data
const starters = [
  {
    name: "Mudkip",
    type: "Water",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
  },
  {
    name: "Snivy",
    type: "Grass",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png",
  },
  {
    name: "Fennekin",
    type: "Fire",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png",
  }
];

// Pages
const Home = () => (
  <div className="hero-section">
    <div className="container">
      <h1>Choose Your Starter Pokémon</h1>
      <p className="lead">
        Every trainer’s journey begins with a choice. Who will be your partner?
      </p>
      <Link to="/choose" className="btn btn-light btn-lg mt-3">
        Pick Your Starter
      </Link>
    </div>
  </div>
);

const ChooseStarter = () => (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Select Your Starter Pokémon</h2>
    <div className="row">
      {starters.map((pokemon) => (
        <div className="col-md-4 mb-4" key={pokemon.name}>
          <div className={`feature-card pokemon-card ${pokemon.type.toLowerCase()}`}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="img-fluid mb-3"
            />
            <h3>{pokemon.name}</h3>
            <span className="badge bg-secondary mb-2">{pokemon.type} Type</span>
            <p>{pokemon.description}</p>
            <button className="btn btn-primary">
              Choose {pokemon.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="container mt-5">
    <h1>About</h1>
    <p>This demo shows a responsive UI for choosing a starter Pokémon.</p>
  </div>
);

// Navbar (UNCHANGED logic, minor label tweaks only)
function ResponsiveNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
          PokéStarter
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/choose" onClick={closeNavbar}>
                Choose Starter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// App
function App() {
  return (
    <Router>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseStarter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
