import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <section className="not-found">
        <div className="container not-found__container">
          <div className="not-found__inner">
            <img className="not-found__img" src="/src/images/404.png"></img>
            <h1 className="not-found__title">Page Not Found</h1>
            <p className="not-found__descr">
              We’re sorry, the page you requested could not be found. Please go
              back to the homepage.
            </p>

            <Link className="not-found__link" to={'/'}>Go home</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
