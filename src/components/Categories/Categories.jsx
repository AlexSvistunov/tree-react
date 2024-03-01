import  { useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import Category from "./Category";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__inner">
          <div className="wrapper-line categories-wrapper__line">
            <h2 className="categories__title section-title">Categories</h2>
            <div className="line"></div>
          </div>
          <Link className="categories__btn" to={ROUTES.CATEGORIES}>
            All categories
          </Link>
        </div>

        <ul className="categories__list list-reset">
          {categoriesList &&
            categoriesList
              .slice(0, 4)
              .map((category) => (
                <Category key={category.id} category={category} />
              ))}
        </ul>
      </div>
    </section>
  );
};


export default Categories;
