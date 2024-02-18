
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../store/apiSlice'
import Contact from '../Contact/Contact'
import HeaderBorder from '../Header/HeaderBorder'
import './SingleProduct.css'

const SingleProduct = () => {
  const {id} = useParams();
  const request = useGetProductQuery(id)
  const data = request.data
  const object = data && data[0]
  console.log(object);
  return (
    <div>
      <HeaderBorder/>

      <section className='product'>
        <div className='container product__container'>
          <img className='product__img' src={data && `../backend/public${object.image}`} width={780} height={572}></img>
          <div className='product-about'>
            <h3 className='product-about__title'>{data && object.title}</h3>
            <div className='product-about__prices'>
              <span className='product-about__currentprice'>{data && object.price}</span>
              <span className='product-about__oldprice'>{data && object.discont_price}</span>
            </div>

            <div className='product-about__amount'>
              <button>+</button>
              <input type='number'></input>
              <button>-</button>
              <button className='product-about__addtocart'>Add to cart</button>
            </div>

            <div className='product-about__texts'>
              <h3 className='product-about__head'>Description</h3>
              <div>
                <p>{data && object.description}</p>
                {/* <p>SOME TEXT2</p> */}
              </div>

              <button>Read more</button>

            </div>
          </div>
        </div>
      </section>

      <Contact/>
    </div>
  )
}

export default SingleProduct