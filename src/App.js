import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SparePartsPage } from "./pages/SparePartsPage";
import { Shop } from "./pages/shop/Shop";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
		<Route path="/spareParts" element={<SparePartsPage />}/>
		<Route path="/shop" element={<Shop />}/>
		<Route path="/about" element={<About />}/>
		<Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
