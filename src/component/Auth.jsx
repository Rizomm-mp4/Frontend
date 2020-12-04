import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      password: null,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://54.75.84.246:2250/login", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { login, password } = this.state;
    return (
      <div className="Auth">
        <form className="Auth__form" onSubmit={this.submitHandler}>
          <label className="Auth__form__id Auth__label">
            Identifiant :
            <input
              type="text"
              name="login"
              value={login}
              onChange={this.changeHandler}
            />
          </label>
          <label className="Auth__form__pwd Auth__label">
            Mot de passe :
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.changeHandler}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Auth;
