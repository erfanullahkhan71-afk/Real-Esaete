// App.js (Main routing file, no color changes needed)
import React from "react";
import { Routes, Route } from "react-router-dom";

import Nave from "./Component/NaveBare/Nave";
import Hero from "./Component/Herosection/Hero";
import Section from "./Component/Sectiontow/Section";
import Property from "./Component/PropertySection/Property";
import Prop from "./Component/PropSection/Prop";
import Faq from "./Component/FaqSection/Faq";
import Foter from "./Component/Footer/Foter";


import About from "./Component/About/About";
import PropertyList from "./Component/PropertyList/PropertyList";
import Contact from "./Component/Contact/Contact";
import SignUp from "./Component/SignUp/SignUp";

export default function App() {
  return (
    <div >
      {/* Nave is styled with Black & Gold theme */}
      <Nave />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* These components are all styled with Black & Gold theme */}
              <Hero />
              <Section />
              <Property />
              <Prop />
              <Faq />
              <Foter />
            </>
          }
        />

        {/* These components are all styled with Black & Gold theme */}
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<PropertyList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="*"
          element={
            <h1 className="p-20 text-center text-3xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}
