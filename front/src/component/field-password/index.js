import React, { useState, useEffect } from "react";
import "./index.css";
import { SignupForm } from "../../utils/form.js";

export default function Component({
  name = "",
  label = "",
  type = "text",
  placeholder = "",
  //value,
}) {
  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    //console.log(name, value);
    setValue(value);
    SignupForm.change(name, value);
  };

  useEffect(() => {
    SignupForm.change(name, value);
  }, [name, value]);

  const togglePassword = () => {
    console.log("Toggle password clicked");
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    setShowPassword((prevShow) => !prevShow);
    handleChange({ target: { name, value } });
  };

  const validatePassword = () => {
    // Ваша логика валидации пароля
    if (value.length < 8) {
      setError("Password must be at least 8 characters long");
    } else {
      setError("");
    }
  };

  return (
    <div className="field field--password">
      <label htmlFor={name} className="field__label">
        {label}
      </label>

      <div className="field__wrapper">
        <input
          onChange={handleChange}
          onBlur={validatePassword}
          type={inputType}
          className={`field__input validation ${error ? "error" : ""}`}
          name={name}
          value={value}
          placeholder={placeholder}
        />
        <span
          onClick={togglePassword}
          className={`field__icon ${showPassword ? "show" : ""}`}
        ></span>
      </div>
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
