import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <section className='categories'>
      <div className='container'>
        <div className='categories__inner'>
            <h2 className='categories__title section-title'>Categories</h2>
            <button className='categories__btn'>All categories</button>
        </div>

        <ul className='categories__list list-reset'>
            <li className='categories__item'>
                <img className='categories__item-img' src='./src/images/categories-1.jpg'></img>
                <h3 className='categories__item-name'>Fertilizer</h3>
            </li>

            <li className='categories__item'>
                <img className='categories__item-img' src='./src/images/categories-2.jpg'></img>
                <h3 className='categories__item-name'>Protective products and septic tanks</h3>
            </li>


            <li className='categories__item'>
                <img className='categories__item-img' src='./src/images/categories-3.jpg'></img>
                <h3 className='categories__item-name'>Planting material	</h3>
            </li>


            <li className='categories__item'>
                <img className='categories__item-img' src='./src/images/categories-4.jpg'></img>
                <h3 className='categories__item-name'>Tools and equipment</h3>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Categories
