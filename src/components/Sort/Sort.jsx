import "./Sort.css";

const Sort = ({sale, isChecked, handleCheckboxChange, isFrom, handlePriceFrom}) => {
  return (
    <div
      className="sort">
      <label>
        <span>Price</span>
        <input className="sort__input-price" placeholder="from" value={isFrom} onChange={(e) => handlePriceFrom(e.target.value)}></input>
        <input className="sort__input-price" placeholder="to"></input>
      </label>

      <label className={sale ? 'sale-hidden' : null}>
        <span>Discounted items</span>
        <input className="sort__input-discount" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
      </label>

      <label>
        <span>Sorted</span>
        <select className="sort__select">
          <option>by default</option>
          <option>newest</option>
          <option>price: high-low</option>
          <option>price: low-high</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
