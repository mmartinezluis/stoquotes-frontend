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

      const toggleButtons = document.createElement("div");
      toggleButtons.className = "row g-0";
      toggleButtons.innerHTML = SessionService.formToggler();
      toggleButtons.querySelectorAll("label").forEach((el) => {
        el.addEventListener("click", (e) => {
          const label = e.target;
          const identifier = label.getAttribute("for");
          // if the input field for the clicked label is checked,
          // skip don't rerender the session form
          if (label.parentElement.querySelector("#" + identifier).checked)
            return;
          const login = identifier.includes("login");
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
        <div class="d-grid col-6">
            <input type="radio" class="btn-check shadow-none" name="options" id="login-toggle" autocomplete="off" checked>
            <label class="btn btn-outline-dark" for="login-toggle">Login</label>
        </div>
        <div class="d-grid col-6">
            <input type="radio" class="btn-check shadow-none" name="options" id="signup-toggle" autocomplete="off">
            <label class="btn btn-outline-dark" for="signup-toggle">SignUp</label>
        </div>
  `;

  static LoginForm = () => `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-2">SQ</h3>
        <div class="form-floating mb-3">
            <input type="email" id="login-email" class="form-control">
            <label for="login-email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" id="login-password" class="form-control" autocomplete="on">
            <label for="login-password">Password</label>
        </div>
        <div class="text-center d-grid gap-2">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Login</button>
        </div>
    </form>`;

  static SignupForm = () => `
    <form class="card-body" id="session-form">
        <h3 class="text-center white-text py-2">SQ</h3>
        <div class="row g-3">
            <div class="form-floating mb-3 col">
                <input type="text" id="signup-firstname" class="form-control">
                <label for="signup-firstname">First name</label>
            </div>
            <div class="form-floating mb-3 col">
                <input type="text" id="signup-lastname" class="form-control">
                <label for="signup-lastname">Last name</label>
            </div>
        </div>
        <div class="form-floating mb-3">            
            <input type="text" id="signup-email" class="form-control">
            <label for="signup-email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" id="signup-password" autocomplete="on" class="form-control">
            <label for="signup-password">Password</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" id="signup-passwordconfirm" autocomplete="on" class="form-control">
            <label for="signup-passwordconfirm">Password confirm</label>
        </div>
        <div class="text-center d-grid gap-2">
            <button type="submit" class="btn btn-primary waves-effect waves-light">Signup</button>
        </div>
    </form>`;
}

export default SessionService;
