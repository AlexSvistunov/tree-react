import React, { useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import Category from "./Category";

const Categories = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  const categoriesList = useSelector(state => state.categories.categoriesList)  
  console.log(categoriesList)

  return (
    <section className="categories">
      <div className="container">
        <div className="categories__inner">
          <h2 className="categories__title section-title">Categories</h2>
          <button className="categories__btn">All categories</button>
        </div>

        <ul className="categories__list list-reset">
          {categoriesList && categoriesList.map(category => <Category key={category.id} category={category}></Category>)}
        
        </ul>
      </div>
    </section>
  );
};

export default Categories;
