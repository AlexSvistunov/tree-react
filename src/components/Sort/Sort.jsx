import "./Sort.css";

const Sort = ({sale, isChecked, setIsChecked, handleCheckboxChange, fromPriceChange, toPriceChange, toPrice, fromPrice}) => {
  return (
    <div
      className="sort">
      <label>
        <span>Price</span>
        <input className="sort__input-price" placeholder="from" type="number" value={fromPrice} onChange={(e) => fromPriceChange(e.target.value)}></input>
        <input className="sort__input-price" placeholder="to" type="number" value={toPrice} onChange={(e) => toPriceChange(e.target.value)}></input>
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
