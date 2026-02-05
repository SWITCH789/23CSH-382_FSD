import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="hpage">
      <h2>Home</h2>
      <p>This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="apage">
      <h2>About</h2>
      <p>This is the About page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="cpage">
      <h2>Contact</h2>
      <p>This is the Contact page.</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
     
    </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
