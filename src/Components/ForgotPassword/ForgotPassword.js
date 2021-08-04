import React from "react";
// import { resetPassword } from "../../API";
import styles from "./ForgotPassword.module.css";
import "../../main.css";
import { useHistory } from "react-router-dom";
import { getPasswordResetToken } from "../../API";

function ForgotPassword() {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (email === "") return null;
    if (!email) {
      setEmailError("This field is mandatory");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Invalid Email address");
    } else {
      getPasswordResetToken(email);
      history.push("/changepassword");
      console.log(email);

      setEmailError("");
    }
  };

  // const handleSubmit = (event) => {
  // if (!inputEmail) {
  //   setErrorEmail("This field is mandatory");
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail)) {
  //   setErrorEmail("Invalid Email address");
  // } else {
  //   setErrorEmail("");
  // }
  // event.preventDefault();

  // resetPassword(inputEmail);
  // event.preventDefault();
  // };
  return (
    <div className={styles.container}>
      <div className='container mt-5 pt-4'>
        <div className='form_div'>
          <h4 className='pb-3'>Forgot your password?</h4>
          <p style={{ fontSize: 14 }}>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <label className='input_label'>Email Address</label>
            <input
              type='text'
              value={email}
              placeholder='Enter your email'
              className='input_field'
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <p className='error_text'>{emailError}</p>
            <div className='text-center'>
              <input className='primary_button mt-3 px-5' type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
