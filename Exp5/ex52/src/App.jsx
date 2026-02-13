import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const Home = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home")), 1000);
  })
);

const About = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./components/About")), 1000);
  })
);

const Contact = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Contact")), 1000);
  })
);

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<h3 className="loading">Loading...</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;