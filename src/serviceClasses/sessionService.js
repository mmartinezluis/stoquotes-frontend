import { handleLoginAndSignup } from "../services/auth/firebase.js";
import { createPortal } from "../tools/customFunctions.js";

class SessionService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  static renderForm = (isLoginMode = true) => {
    let sessionPortal = document.querySelector("#session-portal");
    let formContainer = sessionPortal?.children[1];
    // if the portal has not been created, create the portal,
    // the form container, and the toggle buttons
    if (!sessionPortal) {
      formContainer = document.createElement("div");
      formContainer.className = "card indigo form-white";

      const toggleButtons = document.createElement("div");
      toggleButtons.innerHTML = SessionService.formToggler();
      toggleButtons.querySelectorAll("label").forEach((el) => {
        el.addEventListener("click", (e) => {
          const login = e.target?.getAttribute("for").includes("login");
          SessionService.setForm(formContainer, login);
        });
      });

      createPortal("session-portal", [toggleButtons, formContainer]);
    }
    SessionService.setForm(formContainer, isLoginMode);
  };

  static setForm = (el, isLoginMode) => {
    el.innerHTML = isLoginMode
      ? SessionService.LoginForm()
      : SessionService.SignupForm();
    const submitBtn = el.querySelector('[type="submit"]');
    submitBtn.addEventListener("click", (e) =>
      handleLoginAndSignup(e, isLoginMode)
    );
  };

  static formToggler = () => `
        <input type="radio" class="btn-check" name="options" id="login-toggle" autocomplete="off" checked>
        <label class="btn btn-outline-secondary" for="login-toggle">Login</label>

        <input type="radio" class="btn-check" name="options" id="signup-toggle" autocomplete="off">
        <label class="btn btn-outline-secondary" for="signup-toggle">SignUp</label>

  `;

  static LoginForm = () => `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-3"><i class="fa fa-user"></i> Login:</h3>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="login-email" class="form-control">
            <label for="login-email">Your email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="login-password" class="form-control" autocomplete="on">
            <label for="login-password">Your password</label>
        </div>
        <div class="text-center d-grid gap-2 ">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Login</button>
        </div>
    </form>`;

  static SignupForm = () => `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-3"><i class="fa fa-user"></i> Signup:</h3>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-firstname" class="form-control">
            <label for="signup-firstname">First name</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-lastname" class="form-control">
            <label for="signup-lastname">Last name</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-envelope prefix white-text"></i>
            <input type="text" id="signup-email" class="form-control">
            <label for="signup-email">Email</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="signup-password" autocomplete="on" class="form-control">
            <label for="signup-password">Password</label>
        </div>
        <div class="md-form form-group">
            <i class="fa fa-lock prefix white-text"></i>
            <input type="password" id="signup-passwordconfirm" autocomplete="on" class="form-control">
            <label for="signup-passwordconfirm">Password confirm</label>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Signup</button>
        </div>
    </form>`;
}

export default SessionService;
