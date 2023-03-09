import { useState } from "react";
import Portal from "../portal/Portal";

export default function Login({ isLoginMode }) {
  const [isLogin, setIslogin] = useState(isLoginMode);

  const handleLogin = () => {};
  const handleSignUp = () => {};
  const formToggler = (
    <div className="row g-0">
      <div className="d-grid col-6">
        <input
          type="radio"
          className="btn-check shadow-none"
          name="options"
          id="login-toggle"
          autoComplete="off"
          defaultChecked={isLogin === true}
          onChange={(e) => {
            e.target.checked = true;
            setIslogin(true);
          }}
        />
        <label className="btn btn-outline-dark" htmlFor="login-toggle">
          Login
        </label>
      </div>
      <div className="d-grid col-6">
        <input
          type="radio"
          className="btn-check shadow-none"
          name="options"
          id="signup-toggle"
          autoComplete="off"
          defaultChecked={isLogin === false}
          onChange={(e) => {
            e.target.checked = true;
            setIslogin(false);
          }}
        />
        <label className="btn btn-outline-dark" htmlFor="signup-toggle">
          SignUp
        </label>
      </div>
    </div>
  );
  const LoginForm = (
    <form className="card-body" id="session-form">
      <h3 className="text-center white-text py-2">SQ</h3>
      <div className="form-floating mb-3">
        <input type="email" id="login-email" className="form-control" />
        <label htmlFor="login-email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          id="login-password"
          className="form-control"
          autoComplete="on"
        />
        <label htmlFor="login-password">Password</label>
      </div>
      <div className="text-center d-grid gap-2">
        <button
          type="submit"
          className="btn btn-primary waves-effect waves-light"
        >
          Login
        </button>
      </div>
    </form>
  );
  const SignupForm = (
    <form className="card-body" id="session-form">
      <h3 className="text-center white-text py-2">SQ</h3>
      <div className="row g-3">
        <div className="form-floating mb-3 col">
          <input type="text" id="signup-firstname" className="form-control" />
          <label htmlFor="signup-firstname">First name</label>
        </div>
        <div className="form-floating mb-3 col">
          <input type="text" id="signup-lastname" className="form-control" />
          <label htmlFor="signup-lastname">Last name</label>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input type="text" id="signup-email" className="form-control" />
        <label htmlFor="signup-email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          id="signup-password"
          autoComplete="on"
          className="form-control"
        />
        <label htmlFor="signup-password">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          id="signup-passwordconfirm"
          autoComplete="on"
          className="form-control"
        />
        <label htmlFor="signup-passwordconfirm">Password confirm</label>
      </div>
      <div className="text-center d-grid gap-2">
        <button
          type="submit"
          className="btn btn-primary waves-effect waves-light"
        >
          Signup
        </button>
      </div>
    </form>
  );
  return (
    <>
      {formToggler}
      {isLogin ? LoginForm : SignupForm}
    </>
  );
}
