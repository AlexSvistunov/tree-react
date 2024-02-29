import './CartModal.css'

const CartModal = () => {
  return (
    <div className='modal'>
      <h3 className='modal__title'>Congratulations</h3>
      <div className='modal__texts'>
        <p className='modal__text'>Your order has been successfully placed on the website.</p>
        <p className='modal__text'>A manager will contact you shortly to confirm your order.</p>

        <button className='modal__close-btn'></button>
      </div>
    </div>
  )
}

export default CartModal
