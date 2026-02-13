import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { lazy, Suspense } from "react";

const Dash = lazy(() => import('./components/Dashboard'));

// function App() {
//   return (
//     <Router>
//       <div className="app">

//         <nav className="navbar">
//           <div className="navbar-inner">
//             <Link to="/" className="nav-button">My Portfolio</Link>

//             <div className="nav-links">
//               <Link to="/" className="nav-button">Profile</Link>
//               <Link to="/dashboard" className="nav-button">Dashboard</Link>
//             </div>
//           </div>
//         </nav>

//         <main className="app-content">
//           <Routes>
//             <Route path="/" element={<Profile />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>

//       </div>
//     </Router>
//   );

function App() {
  return (
    <Suspense fallback = {<h3>Loading...</h3>}>
        <Dash />
    </Suspense>
  );
}

export default App;