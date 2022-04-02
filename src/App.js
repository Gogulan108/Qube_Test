import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home component
import Home from "./components/Home";
import Categories from "./components/Category/Categories";
import CategoryDetails from "./components/Category/CategoryDetails";
import Favourites from "./components/Favourites";
function App() {
  useEffect(() =>{
    return () => {
      localStorage.clear();
    };
  },[])
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categorydetails" element={<CategoryDetails />} />
          <Route path="/favourites" element={<Favourites />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
