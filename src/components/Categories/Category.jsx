const Category = ({ category }) => {
  return (
    <li className="categories__item">
      <img
        className="categories__item-img"
        src={`./backend/public/${category.image}`}
      ></img>
      <h3 className="categories__item-name">{category.title}</h3>
    </li>
  );
};

export default Category;
