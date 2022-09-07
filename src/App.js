import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { CryptoForm, CryptoList } from "./components/";

export const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/add-crypto" element={<CryptoForm />} />
          <Route path="/edit-crypto/:id" element={<CryptoForm />} />
        </Routes>
      </div>
    </div>
  );
};
