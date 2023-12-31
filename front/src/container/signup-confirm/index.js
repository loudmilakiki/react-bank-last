import "./index.css";
import { useState } from "react";
import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back";
import { Link } from "react-router-dom";

const SignupConfirmPage = (location) => {
  const searchParams = new URLSearchParams(location.search);
  const confirmationCodeFromUrl = searchParams.get("code");
  const [confirmationCode, setConfirmationCode] = useState(
    confirmationCodeFromUrl || ""
  );

  // Обработчик изменения значения поля ввода
  const handleCodeChange = (e) => {
    setConfirmationCode(e.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь можно выполнить проверку кода и выполнить необходимые действия
    // Например, отправить запрос к серверу для проверки кода

    // После успешной проверки можно перенаправить пользователя на другую страницу
    // Например, на страницу баланса
  };

  return (
    <Page>
      <header>
        <Status />
        <Back />
      </header>

      <div className="content-con">
        <div className="section">
          <h1 className="page__title">Recover password</h1>
          <p className="descr">Choose a registration method</p>
        </div>

        <div className="action-con" onSubmit={handleSubmit}>
          <div className="input">
            <span>Code</span>
            <input
              className="input-confirm-code"
              placeholder="Enter code"
              label="Code"
              type="text"
              value={confirmationCode}
              onChange={handleCodeChange}
            />
          </div>

          <div className="buttons-con">
            <button className="button-confirm" type="submit">
              <Link className="link" to="../signup-confirm/balance">
                Confirm
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="indicator-con">
        <img src="/img/indicator.png" alt="Indicator" />
      </div>
    </Page>
  );
};

export default SignupConfirmPage;

// import React, { useContext, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import { useHistory } from "react-router-dom";

// const SignupConfirmPage = () => {
//   const { confirmAccount, updateAuthentication } = useContext(AuthContext);
//   const [code, setCode] = useState("");
//   const history = useHistory();

//   const handleConfirm = async () => {
//     try {
//       // Assuming confirmAccount is a function that sends the confirmation code to the server
//       await confirmAccount(code);

//       // Assuming updateAuthentication is a function that updates the authentication status in the context
//       updateAuthentication(true);

//       // Redirect to the desired page after successful confirmation
//       history.push("/balance");
//     } catch (error) {
//       // Handle error, show a message, etc.
//       console.error("Error confirming account:", error);
//     }
//   };

//   return (
//     // ... your existing JSX code

//     <div className="action-con">
//       <div className="input">
//         <span>Code</span>
//         <input
//           className="input-confirm-code"
//           placeholder="code"
//           label="Code"
//           type="code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//         />
//       </div>

//       <div className="buttons-con">
//         <button className="button-confirm" onClick={handleConfirm}>
//           Confirm
//         </button>
//       </div>
//     </div>

//     // ... your existing JSX code
//   );
// };

// export default SignupConfirmPage;
