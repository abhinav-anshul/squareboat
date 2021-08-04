import React from "react";
import { useHistory } from "react-router-dom";
import { getPasswordResetToken } from "../../API";

function ForgotPassword() {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") return null;

    getPasswordResetToken(email);
    history.push("/changepassword");
    console.log(email);
  };

  return (
    <>
      <div>
        {emailError && <p>{emailError}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type='text'
            value={email}
            placeholder='Enter your email'
            onChange={(event) => setEmail(event.target.value)}
          />

          <input type='submit' />
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
