import { useRef } from "react";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = useAuth();

  if (auth.user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    auth.login(email, password);
    // login(email, password);

    // for empty inputs

    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  };

  return (
    <>
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="email"> email</label>
            <input
              id="email"
              ref={emailRef}
              placeholder="Enter email here"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password"> password </label>
            <input
              id="password"
              ref={passwordRef}
              placeholder="Password *******"
              required
            />
          </div>
          <div>
            <button> Login </button>
          </div>
        </form>
      </div>
    </>
  );
}
