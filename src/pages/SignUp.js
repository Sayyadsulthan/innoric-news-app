import { useRef } from "react";
import { useAuth } from "../hooks";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styled from "../styles/loginSignup.module.css";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const auth = useAuth();
  const history = useNavigate();

  if (auth.user) {
    return <Navigate to="/" />;
  }
  function handleClearInputs() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPassRef.current.value = "";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = confirmPassRef.current.value;

    // for empty inputs
    handleClearInputs();

    const data = await auth.signUp(name, email, password, confirm_password);
    if (data.success) {
      toast.success(data.message);
      return history("/login");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className={styled.signupWrapper}>
        <div className={styled.signupContainer}>
          <div className={styled.Title}>Registration </div>
          <form className={styled.formContainer} onSubmit={handleSubmit}>
            <div className={styled.InputWrapper}>
              <div className={styled.inputContainer}>
                <label htmlFor="name"> name</label>
                <input id="name" ref={nameRef} placeholder="abc" required />
              </div>
              <div className={styled.inputContainer}>
                <label htmlFor="email"> email</label>
                <input
                  id="email"
                  ref={emailRef}
                  type="email"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <div className={styled.inputContainer}>
                <label htmlFor="password"> password </label>
                <input
                  id="password"
                  ref={passwordRef}
                  type="password"
                  placeholder=" *******"
                  required
                />
              </div>
              <div className={styled.inputContainer}>
                <label htmlFor="confirm-password"> Confirm password </label>
                <input
                  id="confirm-password"
                  ref={confirmPassRef}
                  type="password"
                  placeholder=" *******"
                  required
                />
              </div>
            </div>

            <div className={styled.submitBtnContainer}>
              <button className={styled.submitBtn}> SignUp </button>
            </div>

            <div className={styled.formFooter}>
              <span>Already have an Account : </span>
              <Link className={styled.Link} to="/login">
                <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
