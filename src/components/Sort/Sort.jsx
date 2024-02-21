import "./Sort.css";

const Sort = ({sale, isChecked, setIsChecked, handleCheckboxChange}) => {
  return (
    <div
      className="sort">
      <label>
        <span>Price</span>
        <input className="sort__input-price" placeholder="from" type="number"></input>
        <input className="sort__input-price" placeholder="to" type="number"></input>
      </label>

      <label className={sale ? 'sale-hidden' : null}>
        <span>Discounted items</span>
        <input className="sort__input-discount" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
      </label>

      <label>
        <span>Sorted</span>
        <select className="sort__select">
          <option>by default</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
