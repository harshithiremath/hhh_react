import React from "react";
import Particles from "react-particles-js";
import { ContextConsumer } from "../components/Context";
import { Link } from "react-router-dom";
class SignIn extends React.Component {
  particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "000000",
      },

      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 190,
        color: "#000000",
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log("logged_in");
      //Run backend user signin code here
      //
      //
      //
    } else {
      console.log("sign_in_failed");
      this.setState({
        password: "",
      });
    }
  };
  validate() {
    let email = this.state["email"];
    let password = this.state["password"];
    if (email === "") {
      window.alert("Please enter a valid e-mail address.");
      return false;
    }

    if (password === "") {
      window.alert("Please enter your password");
      return false;
    }

    if (password.length < 8) {
      window.alert("Password is small(Minimum characters:8)");
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <Particles className="particles" params={this.particlesOptions} />
        <div className="signin-box-container">
          <h1>Log In</h1>
          <form className="forms" onSubmit={this.handleSubmit}>
            <div className="tbox">
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="tbox">
              <input
                type="password"
                value={this.state["password"]}
                onChange={this.handleChange}
                placeholder="Password"
                name="password"
              />
            </div>
            <div>
              <span>
                <a className="forgot">FORGOT PASSWORD?</a>
              </span>
            </div>
            <input
              className="loginbtn"
              type="submit"
              name="login-submit"
              value="Login"
            />
          </form>
          <Link to="/signup" className="new_member_text">
            New Member?
          </Link>
        </div>
      </div>
    );
  }
}
export default SignIn;
