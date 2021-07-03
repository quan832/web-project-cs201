import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { APP_TOKEN } from "../../../../util/constant/constant";
import _ from "lodash";
import { REGISTER_USER } from "../../action/userAction";


function Register(props) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const usernameRef = React.createRef();

  const dispatch = useDispatch();

  //get token
  const token = localStorage.getItem(APP_TOKEN);

  // if islogin will route to homepage
  useEffect(() => {
    // if have token, router will change home page
    if (!_.isEmpty(token)) {
      props.history.push("/");
    }
  }, []);

  const registerUser = () => {
    // get value input
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;

    // dispatch action
    dispatch({
      type: REGISTER_USER,
      payload: {
        email,
        password,
        username,
      },
    });

    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="padding-top padding-bottom">
        <div className="account-area">
          <div className="section-header-3">
            <span className="cate">welcome</span>
            <h2 className="title">to Cinema </h2>
          </div>
          <form className="account-form">
            <div className="form-group">
              <label htmlFor="email1">
                Email<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                id="email1"
                required
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass1">
                username<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="uname"
                required
                ref={usernameRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass2">
                Password<span>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="pass2"
                required
                ref={passwordRef}
              />
            </div>
            <div className="form-group checkgroup">
              <input type="checkbox" id="bal" required defaultChecked />
              <label htmlFor="bal">
                I agree to the <a href="#0">Terms, Privacy Policy</a> and{" "}
                <a href="#0">Fees</a>
              </label>
            </div>
            <div className="form-group text-center">
              <input
                onClick={(e) => {
                  e.preventDefault();
                  registerUser();
                }}
                type="submit"
                defaultValue="Sign Up"
              />
            </div>
          </form>
          <div className="option">
            Already have an account? <a href="sign-in.html">Login</a>
          </div>
          <div className="or">
            <span>Or</span>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#0" className="active">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-google" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Register);
