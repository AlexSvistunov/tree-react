import React, { useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { useGetCategoriesQuery } from "../../store/apiSlice";
import Category from "./Category";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  const categoriesList = useSelector(state => state.categories.categoriesList)
  return (
    <section className="categories" style={{paddingTop: 0}}>
      <div className="container">
        <div className="categories__inner">
          <h2 className="categories__title section-title">Categories</h2>
        </div>
        <ul className="categories__list list-reset">
          {categoriesList &&
            categoriesList.map((category) => (
              <Category key={category.id} category={category}/>
            ))
          }
        </ul>
      </div>
    </section>
  );
};


export default AllCategories;
