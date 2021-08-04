import React from "react";
import { getTokenValidation, sendPasswordTokenBody } from "../../API";
import styles from "./ForgotPassword.module.css";
import "../../main.css";

function ChangePassword() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");

    if (password !== confirmPassword) {
      setError("Passwords doesnt match");
    } else if (password === "" || confirmPassword === "") {
      setError("Can't be Empty");
    }

    const validation = getTokenValidation(token);

    if (validation.then((data) => data)) {
      sendPasswordTokenBody(password, confirmPassword, token);
    } else {
      console.log("invalid token");
    }

    sendPasswordTokenBody(password, confirmPassword, token).then((data) => {
      console.log(data);
      setError(data.statusText);
    });
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <div className={styles.container}>
        <div className='container mt-5 pt-4'>
          <div className='form_div'>
            <h4 className='pb-3'>Reset Your Password</h4>
            <p style={{ fontSize: 14 }}>Enter your new password below</p>

            <form onSubmit={handleSubmit}>
              <label className='input_label'>New Password</label>
              <input
                className='input_field'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Enter your Password'
              />
              <label className='input_label'>Confirm new Password</label>
              <input
                className='input_field'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Enter your Password'
              />
              <p className='error_text'>{error}</p>
              <div className='text-center'>
                <input
                  className='primary_button mt-3 px-5'
                  type='submit'
                  value='Reset'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
