class Login {
  email;
  password;
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.validations();
  }

  validations() {
    this.validateEmail();
    this.validatePassword();
  }

  validateEmail() {
    const expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = expReg.test(this.email);

    if (!isValid) {
      throw Error("Correo INVALIDO");
    }
  }

  validatePassword() {
    const expRegPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const isValid = expRegPass.test(this.password);

    if (!isValid) {
      throw Error("Contraseña invalida");
    }
  }
}

module.exports = { Login };
