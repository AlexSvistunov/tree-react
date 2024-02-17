import React from "react";
import Categories from "../components/Categories/Categories";
import Contact from "../components/Contact/Contact";
import HeaderBorder from "../components/Header/HeaderBorder";

const CategoriesPage = () => {
  return (
    <>
      <HeaderBorder />
      <main>
        <Categories />
        <Contact />
      </main>
    </>
  );
};

export default CategoriesPage;
