
import "./Categories.css";
import { useSelector } from "react-redux";
import Category from "./Category";
import useFetchProducts from "../../hooks/useFetchProducts";

const AllCategories = () => {
  useFetchProducts()
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
