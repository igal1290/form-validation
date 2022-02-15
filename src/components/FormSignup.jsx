import Compass from '../images/compass.svg';
import Ether from '../images/ether.svg';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import validate from '../functions/formValidation';
import './FormSignup.css';

const FormSignup = () => {
  // Hooks =>
  // use form
  const { handleChange, handleSubmit, values, isSubmitting, errors } =
    useForm(validate);

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
          <form noValidate onSubmit={handleSubmit}>
            <h1 className="form__text">Sign up</h1>
            <div className="form__inputs">
              <input
                type="text"
                className="form__input"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              {isSubmitting && errors.username && (
                <span className="form__error">{errors.username}</span>
              )}
            </div>
            <div className="form__inputs">
              <input
                type="email"
                className="form__input"
                placeholder="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {isSubmitting && errors.email && (
                <span className="form__error">{errors.email}</span>
              )}
            </div>
            <div className="form__inputs">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {isSubmitting && errors.password && (
                <span className="form__error">{errors.password}</span>
              )}
            </div>
            <div className="form__inputs">
              <input
                type="password"
                className="form__input"
                placeholder="Confirm password"
                name="password2"
                value={values.password2}
                onChange={handleChange}
              />
              {isSubmitting && errors.password2 && (
                <span className="form__error">{errors.password2}</span>
              )}
            </div>
            <button type="submit" className="form__btn">
              Sign up
            </button>
          </form>
          <div className="form__signin">
            <p className="form__paragraph">Already a member?</p>
            <Link to="/signin" className="form__signin-link">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="form__content-right">
        <img
          src={Ether}
          alt="ether"
          width="200px"
          height="240px"
          className="ether-img"
        />

        <h1>Buy crypto instantly!</h1>
        <p>
          Buy, sell, and manage your crypto on the most trusted and secured
          cryptocurrency trading platform.
        </p>
      </div>
    </div>
  );
};

export default FormSignup;
