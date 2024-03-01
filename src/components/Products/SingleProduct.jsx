import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/apiSlice";
import Contact from "../Contact/Contact";
import HeaderBorder from "../Header/HeaderBorder";
import "./SingleProduct.css";
import { addProductToCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice";

const SingleProduct = () => {
  let [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList)
  const { id } = useParams();
  const productId = useGetProductQuery(id);

  const data = productId.data;
  const object = data && data[0];
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // const productsList = useSelector((state) => state.products.productsList)
  
  // const product = productsList.find(el => el.id === id);

  // if (!product) {
  //   return <Redirect to="/404" />;
  // }

  

  const addToCart = (id) => {
    const isItemExist = cartList.find((el) => el === id);
    if (!isItemExist) {
      dispatch(addProductToCart({id, amount}));
      return isItemExist;
    } else {
      return;
    }
  };

  const plusAmountOfProduct = () => {
    setAmount(++amount)
  };

  const minusAmountOfProduct = () => {
    if(amount > 1) {
      setAmount(--amount)
    }
 
    
  };
  return (
    <div>
      <HeaderBorder />

      <section className="product">
        <div className="container product__container">
          <img
            className="product__img"
            src={data && `/backend/public${object.image}`}
            width={780}
            height={572}
          ></img>
          <div className="product-about">
            <h3 className="product-about__title">{data && object.title}</h3>
            <div className="product-about__prices">
              <span className="product-about__currentprice">
                {data && object['discont_price'] ? "$" + object["discont_price"] : data && object.price + "$"}
              </span>

              {data && object["discont_price"] && (
                <span className="product-about__oldprice">
                  {data && object["discont_price"] ? "$" + (data && object.price) : null}
                  
                </span>
              )}

              {data && object["discont_price"] ? (
                <div className="product-about__discount">
                  {Math.ceil(
                    ((object["discont_price"] - object.price) / object.price) *
                      100
                  )}
                  %
                </div>
              ) : null}
            </div>

            <div className="product-about__amount">
              <div className="product-about__inner">
                <button
                  className="product-about__plus"
                  onClick={plusAmountOfProduct}
                >
                  +
                </button>
                <div className="product-about__number">{amount}</div>
                <button
                  className="product-about__minus"
                  onClick={minusAmountOfProduct}
                >
                  -
                </button>
              </div>
              <button
                className={
                  object && cartList.find((el) => el.id === object.id)
                    ? "product-about__addtocart product-about__addtocart--incart"
                    : "product-about__addtocart"
                }
                onClick={() => {
                  addToCart(object.id);
                }}
              >
                {object && cartList.find((el) => el.id === object.id)
                  ? "Added"
                  : "Add to cart"}
              </button>
            </div>

            <div className="product-about__texts">
              <h3 className="product-about__head">Description</h3>
              <div className="product-about__text">
                <p>{data && object.description}</p>
              </div>

              <button className="product-about__readmore">Read more</button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default SingleProduct;
