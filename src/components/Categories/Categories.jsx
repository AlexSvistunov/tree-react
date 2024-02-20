import React, { useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { useGetCategoriesQuery } from "../../store/apiSlice";
import Category from './Category'
import { Link } from "react-router-dom";

const Categories = () => {

  const request = useGetCategoriesQuery()
  const categoriesList = request.data
// desctructuring, loader spinner
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__inner">
          <h2 className="categories__title section-title">Categories</h2>
          <Link className="categories__btn" to={'/categories'}>All categories</Link>
        </div>

        <ul className="categories__list list-reset">
          {categoriesList &&
            categoriesList.slice(0,4).map((category) => (
              <Category key={category.id} category={category}/>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

// передавать какую-то строчку и если она есть, то такой-то класс, если нет - то ничего

export default Categories;
