import "./CartModal.css";

const CartModal = ({ modalActive, setModalActive }) => {
  return (
    <div className={modalActive ? 'modal modal--active' : 'modal'}>
      <div className="modal__inner">
        <h3 className="modal__title">Congratulations</h3>
        <div className="modal__texts">
          <p className="modal__text">
            Your order has been successfully placed on the website.
          </p>
          <p className="modal__text">
            A manager will contact you shortly to confirm your order.
          </p>

          <button className="modal__close-btn" onClick={() => setModalActive(false)}></button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
