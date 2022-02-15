import Compass from '../images/compass.svg';
import Ether from '../images/ether.svg';
import { Link } from 'react-router-dom';
import './FormSignup.css';

const FormSignin = () => {
  // Functions =>
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form__container">
      <div className="form__content-left">
        <div className="form__name">
          <img
            src={Compass}
            alt="compass"
            width="24"
            height="24"
            className="form__logo"
          />
          <h1 className="form__logo-text">Noden</h1>
        </div>
        <div className="form__signup">
          <form onSubmit={handleSubmit}>
            <h1 className="form__text">Sign in</h1>
            <div className="form__inputs">
              <input
                type="text"
                className="form__input"
                placeholder="Username"
                name="username"
              />

              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
              />
            </div>
            <button type="submit" className="form__btn">
              Sign in
            </button>
          </form>
          <div className="form__signin">
            <p className="form__paragraph">Don't have an account?</p>
            <Link to="/" className="form__signin-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="form__content-right">
        <img src={Ether} alt="ether" width="200px" height="240px" />
        <h1>Buy crypto instantly!</h1>
        <p>
          Buy, sell, and manage your crypto on the most trusted and secured
          cryptocurrency trading platform.
        </p>
      </div>
    </div>
  );
};

export default FormSignin;
