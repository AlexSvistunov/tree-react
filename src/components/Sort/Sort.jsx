import "./Sort.css";

const Sort = ({
  sale,
  isChecked,
  handleCheckboxChange,
  setPriceFrom,
  priceFrom,
  setPriceTo,
  priceTo,
  handlePriceRangeChange,
}) => {
  return (
    <div className="sort">
      <label>
        <span>Price</span>
        <input
          className="sort__input-price"
          value={priceFrom}
          onChange={(e) => {
            setPriceFrom(Number(e.target.value))
          }}
          placeholder="from"
        ></input>
        <input
          className="sort__input-price"
          value={priceTo}
          onChange={(e) => {
            setPriceTo(Number(e.target.value))
          }}
          placeholder="to"
        ></input>
      </label>

      <label className={sale ? "sale-hidden" : null}>
        <span>Discounted items</span>
        <input
          className="sort__input-discount"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        ></input>
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
