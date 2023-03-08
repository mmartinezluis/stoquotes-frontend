import { useState } from "react";
import Portal from "../portal/Portal";

export default function Login() {
  const [isLogin, setIslogin] = useState(true);

  const handleLogin = () => {};
  const handleSignUp = () => {};
  const formToggler = () => (
    <div className="row g-0">
      <div class="d-grid col-6">
        <input
          type="radio"
          class="btn-check shadow-none"
          name="options"
          id="login-toggle"
          autocomplete="off"
          checked={isLogin === true}
          onClick={() => setIslogin(true)}
        />
        <label class="btn btn-outline-dark" for="login-toggle">
          Login
        </label>
      </div>
      <div class="d-grid col-6">
        <input
          type="radio"
          class="btn-check shadow-none"
          name="options"
          id="signup-toggle"
          autocomplete="off"
          checked={isLogin === false}
          onClick={() => setIslogin(false)}
        />
        <label class="btn btn-outline-dark" for="signup-toggle">
          SignUp
        </label>
      </div>
    </div>
  );

  const LoginForm = () => (
    <form class="card-body" id="session-form">
      <h3 class="text-center white-text py-2">SQ</h3>
      <div class="form-floating mb-3">
        <input type="email" id="login-email" class="form-control" />
        <label for="login-email">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          id="login-password"
          class="form-control"
          autocomplete="on"
        />
        <label for="login-password">Password</label>
      </div>
      <div class="text-center d-grid gap-2">
        <button type="submit" class="btn btn-primary waves-effect waves-light">
          Login
        </button>
      </div>
    </form>
  );

  const SignupForm = () => (
    <form class="card-body" id="session-form">
      <h3 class="text-center white-text py-2">SQ</h3>
      <div class="row g-3">
        <div class="form-floating mb-3 col">
          <input type="text" id="signup-firstname" class="form-control" />
          <label for="signup-firstname">First name</label>
        </div>
        <div class="form-floating mb-3 col">
          <input type="text" id="signup-lastname" class="form-control" />
          <label for="signup-lastname">Last name</label>
        </div>
      </div>
      <div class="form-floating mb-3">
        <input type="text" id="signup-email" class="form-control" />
        <label for="signup-email">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          id="signup-password"
          autocomplete="on"
          class="form-control"
        />
        <label for="signup-password">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          id="signup-passwordconfirm"
          autocomplete="on"
          class="form-control"
        />
        <label for="signup-passwordconfirm">Password confirm</label>
      </div>
      <div class="text-center d-grid gap-2">
        <button type="submit" class="btn btn-primary waves-effect waves-light">
          Signup
        </button>
      </div>
    </form>
  );

  return (
    <Portal isOpen={true}>
      {formToggler()}
      {isLogin ? LoginForm() : SignupForm()}
    </Portal>
  );
}
