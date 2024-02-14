import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Registration";
import Header from "./Header";
import Premium from "./Premium";
import Basic from "./Basic";
import Standard from "./Standard";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        
          <Route path="/registration" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
