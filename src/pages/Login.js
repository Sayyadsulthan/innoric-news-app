import { useRef } from "react";
import { useAuth } from "../hooks";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import styled from "../styles/loginSignup.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    emailRef.current.value = "";
    passwordRef.current.value = "";
    const data = await auth.login(email, password);
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <div className={styled.signupWrapper}>
        <div className={styled.signupContainer}>
          <div className={styled.Title}>Login Form</div>
          <form className={styled.formContainer} onSubmit={handleSubmit}>
            <div className={styled.InputWrapper}>
              <div className={styled.inputContainer}>
                <label htmlFor="email"> email</label>
                <input
                  id="email"
                  ref={emailRef}
                  placeholder="Enter email here"
                  required
                />
              </div>
              <div className={styled.inputContainer}>
                <label htmlFor="password"> password </label>
                <input
                  id="password"
                  ref={passwordRef}
                  placeholder="Password *******"
                  required
                />
              </div>
            </div>

            <div className={styled.submitBtnContainer}>
              <button className={styled.submitBtn}> SignUp </button>
            </div>

            <div className={styled.formFooter}>
              <span>Don't have an Account : </span>
              <Link className={styled.Link} to="/signup">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
