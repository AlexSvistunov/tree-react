import { Link } from "react-router-dom";
const Category = ({ category }) => {
  const categoryLink = category.title.toLowerCase().split('').filter(letter => letter !== ' ').join('')

  return (
    <li className="categories__item">
      <Link to={'/categories/' + categoryLink + '/' + category.id}>
        <img
          className="categories__item-img"
          src={`/backend/public/${category.image}`}
        ></img>
        <h3 className="categories__item-name">{category.title}</h3>
      </Link>
    </li>
  );
};

export default Category;
