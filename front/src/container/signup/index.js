import "./index.css";
import React, { useState } from "react";
import Page from "../../component/page";
import Back from "../../component/back";
import Status from "../../component/status";
//import { SignupForm } from "../../utils/form.js";
import { Link } from "react-router-dom";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password";

const SignupPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [emailError, setEmailError] = useState(true);
  // const [passwordError, setPasswordError] = useState("");
  // const [passwordConfirmationError, setPasswordConfirmationError] =
  //   useState("");
  // const [isRegistrationSuccessfull, setRegistrationSuccessfull] =
  //   useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [confirmationCode, setConfirmationCode] = useState(null);

  // const sendToServerForConfirmationCode = async (email) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:4000/confirmation-code/?email=${email}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     // Проверка успешности отправки запроса на сервер
  //     if (response.ok) {
  //       return data.code; // Возвращаем полученный код подтверждения
  //     } else {
  //       console.error(data.error); // логирование ошибки
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // const validateEmail = (value) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(value);
  // };

  // const validatePassword = (value) => {
  //   return value.length >= 8;
  // };

  // const validatePasswordConfirmation = (value) => {
  //   return value === password;
  // };

  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);

  //   if (validateEmail(value)) {
  //     setEmailError("Invalid email format");
  //   } else {
  //     setEmailError("");
  //   }
  // };

  // const handlePasswordChange = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);

  //   if (!validatePassword(value)) {
  //     setPasswordError("Password must be at least 8 characters long");
  //   } else {
  //     setPasswordError("");
  //   }
  // };

  // const handlePasswordConfirmationChange = (e) => {
  //   const value = e.target.value;
  //   setPasswordConfirmation(value);

  //   if (!validatePasswordConfirmation(value)) {
  //     setPasswordConfirmationError("Password do not match");
  //   } else {
  //     setPasswordConfirmationError("");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     validateEmail(email) &&
  //     validatePassword(password) &&
  //     !passwordConfirmationError
  //   ) {
  //     await register();
  //   }
  // };

  // const register = async () => {
  //   const generatedCode = await sendToServerForConfirmationCode(email);

  //   if (generatedCode) {
  //     setConfirmationCode(generatedCode);
  //     setRegistrationSuccessfull(true);
  //     setErrorMessage("");
  //     // Теперь у вас есть код подтверждения, который можно использовать
  //   } else {
  //     setRegistrationSuccessfull(false);
  //     setErrorMessage("Не удалось зарегистрироваться. Повторите попытку.");
  //   }
  // };

  return (
    <Page>
      <header>
        <Status />
        <Back />
      </header>

      <form className="page__section">
        <h1 className="page__title">Sign Up</h1>
        <div className="descr">Choose a registration method</div>

        <div className="form">
          <div className="form__item">
            <Field
              action="signupForm.change"
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              //onChange={handleEmailChange}
              //value={email}
            />

            <span name="email" className="form__error">
              Error
            </span>
          </div>

          <div className="form__item">
            <FieldPassword
              className="field__password"
              action="signupForm"
              label="Password"
              type="password"
              name="password"
              placeholder="password"
              //onChange={handlePasswordChange}
              //value={password}
              errorMessage="Password must be longer then 8 number"
            />
            <span name="password" className="form__error">
              passwordError
            </span>
          </div>

          <div className="form__item">
            <FieldPassword
              className="field__password"
              action="signupForm"
              label="Password again"
              type="password"
              name="password again"
              placeholder="password again"
              //onChange={handlePasswordConfirmationChange}
              // value={passwordConfirmation}
            />
            <span name="passwordConfirmation" className="form__error">
              password again
            </span>
          </div>

          <span>
            Already have an account?
            <Link className="account" to="/signin">
              Sign In
            </Link>
          </span>
        </div>

        <button
          className="button"
          type="submit"
          // onClick={handleContinueClick}
          // disabled={
          //   !!(emailError || passwordError || passwordConfirmationError)
          // }
        >
          <Link className="link" to="./signup-confirm">
            Continue
          </Link>
        </button>
        <span>
          <img src="./img/danger.png" />A user with the same name is already
          exist
        </span>
        <div className="indicator-up">
          <img src="/img/indicator.png" />
        </div>

        {/* {isRegistrationSuccessfull && ( */}
        <div>
          <img src="./img/danger.png" />A user with the same name is already
          exist
        </div>
        {/* )} */}

        {/* {isRegistrationSuccessfull && ( */}
        <div>
          <p>Регистрация успешно подтверждена!</p>
          {/* Добавьте здесь любой дополнительный контент или перенаправление */}
        </div>
        {/* )} */}
      </form>
    </Page>
  );
};

export default SignupPage;
