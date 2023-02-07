import { handleLoginAndSignup } from "../services/auth/firebase.js";

class SessionService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  static removeForm = () => document.querySelector("#aside-");

  static formContainer = `<div></div>`;

  static renderForm = (isLoginMode = false) => {
    let aside = document.querySelector("#aside-session");
    let formContainer = aside?.children[0];
    if (!aside) {
      aside = document.createElement("aside");
      aside.id = "aside-session";
      formContainer = document.createElement("div");
      formContainer.className = "card indigo form-white";
      aside.appendChild(formContainer);
      document.querySelector("main").appendChild(aside);
    }
    SessionService.toggleForm(formContainer, isLoginMode);
  };

  static toggleForm = (el, isLoginMode) => {
    el.innerHTML = isLoginMode
      ? SessionService.LoginForm
      : SessionService.SignupForm;
    const submitBtn = el.querySelector('[type="submit"]');
    submitBtn.addEventListener("click", (e) =>
      handleLoginAndSignup(e, isLoginMode)
    );
  };

  static LoginForm = `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-3"><i class="fa fa-user"></i> Login:</h3>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="login-email" class="form-control">
            <label for="login-email">Your email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="login-password" class="form-control">
            <label for="login-password">Your password</label>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Login</button>
        </div>
    </form>`;

  static SignupForm = `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-3"><i class="fa fa-user"></i> Login:</h3>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-firstname" class="form-control">
            <label for="signup-firstname">Your email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-lastname" class="form-control">
            <label for="signup-lastname">Your email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-email" class="form-control">
            <label for="signup-email">Your email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="signup-password" class="form-control">
            <label for="signup-password">Your password</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="signup-passwordconfirm" class="form-control">
            <label for="signup-passwordconfirm">Your password</label>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Login</button>
        </div>
    </form>`;
}

export default SessionService;
