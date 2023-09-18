import { useRef } from "react";
import { signUp } from "../api";
import { useAuth } from "../hooks";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = confirmPassRef.current.value;

    auth.signUp(name, email, password, confirm_password);

    // for empty inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPassRef.current.value = "";
  };
  return (
    <>
      <div>
        <h2>SignUp Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="name"> name</label>
            <input
              id="name"
              ref={nameRef}
              placeholder="name email here"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email"> email</label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              placeholder="Enter email here"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password"> password </label>
            <input
              id="password"
              ref={passwordRef}
              type="password"
              placeholder=" *******"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="confirm-password"> Confirm password </label>
            <input
              id="confirm-password"
              ref={confirmPassRef}
              type="password"
              placeholder=" *******"
              required
            />
          </div>
          <div>
            <button> SignUp </button>
          </div>
        </form>
      </div>
    </>
  );
}
