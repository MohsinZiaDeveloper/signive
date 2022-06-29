import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AfterSendForm from "../Pages/AfterSendForm";
import Page404 from "../Pages/Page404";
import PolitykaPrywatnosci from "../Pages/PolitykaPrywatnosci";
import Strona from "../Pages/Strona";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AfterSendForm />} />
          <Route path="page404" element={<Page404 />} />
          <Route path="polityka" element={<PolitykaPrywatnosci />} />
          <Route path="strona" element={<Strona />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
