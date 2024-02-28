import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavbarTop from "./NavbarTop";

import NavbarCenter from "./NavbarCenter";
import All from "./All";
import Fullstackdevelopement from "./Fullstackdevelopement";
import Cybersecurity from "./Cybersecurity";
import Career from "./Career";
import Header from "./Header";
import Datascience from "./Datascience";

function App() {
  return (
    <>
    {/* Calling All  Created Components And Assigning Paths To It  */}
      <NavbarTop />
      <Header />

      <Router>
        <NavbarCenter />

        <Routes>
          <Route path="/" element={<All />} />
          <Route
            path="/Fullstackdevelopement"
            element={<Fullstackdevelopement />}
          />
          <Route path="/Cybersecurity" element={<Cybersecurity />} />
          <Route path="/Datascience" element={<Datascience />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;