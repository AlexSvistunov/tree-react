import "./Sort.css";

const Sort = ({
  sale,
  applyFilters,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  showDiscounted,
  setShowDiscounted,
  sortBy,
  setSortBy
}) => {
  const handleApplyFilters = () => {
    applyFilters({ priceFrom, priceTo, showDiscounted, sortBy });
  };

  console.log(showDiscounted);

  return (
    <div className="sort">
      <label>
        <span>Price</span>
        <input
          className="sort__input-price"
          value={priceFrom}
          onChange={(e) => setPriceFrom(Number(e.target.value))}
          placeholder="from"
        ></input>
        <input
          className="sort__input-price"
          value={priceTo}
          onChange={(e) => setPriceTo(Number(e.target.value))}
          placeholder="to"
        ></input>
      </label>

      <label className={sale ? "sale-hidden" : 'custom-checkbox__label'}>
        <span>Discounted items</span>
        <input
          className="sort__input-discount visually-hidden"
          type="checkbox"
          checked={showDiscounted}
          onChange={() => setShowDiscounted(!showDiscounted)}
        ></input>
        <div className="custom-checkbox"></div>
      </label>

      <label>
        <span>Sorted</span>
        <select
          className="sort__select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="by_default">By Default</option>
          <option value="newest">Newest</option>
          <option value="price_high_low">Price High-Low</option>
          <option value="price_low_high">Price Low-High</option>
        </select>
      </label>

      <button className="sort__apply-btn" onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Sort;
