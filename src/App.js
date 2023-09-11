import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SparePartsPage } from "./pages/SparePartsPage";
import { RefurbishedMowerPage } from "./pages/RefurbishedMowersPage";
import { ServicingRepairsPage } from "./pages/ServicingRepairsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
		<Route path="/spareParts" element={<SparePartsPage />}/>
		<Route path="/refurbishedMowers" element={<RefurbishedMowerPage />}/>
		<Route path="/servicingRepairs" element={<ServicingRepairsPage />}/>
		<Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
