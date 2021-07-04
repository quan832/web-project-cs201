import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { APP_TOKEN } from "../../../../util/constant/constant";
import _ from "lodash";

// import action
import { LOGIN_USER } from "../../action/userAction";

function Login(props) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const dispatch = useDispatch();

  //get token
  const token = localStorage.getItem(APP_TOKEN);

  useEffect(() => {
    // if have token, router will change home page
    if (!_.isEmpty(token)) {
      props.history.push("/");
    }
  }, []);

  const loginUser = () => {
    // get value input
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // dispatch action
    dispatch({
      type: LOGIN_USER,
      payload: {
        email,
        password,
      },
    });

    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="padding-top padding-bottom">
        <div className="account-area">
          <div className="section-header-3">
            <span className="cate">hello</span>
            <h2 className="title">welcome back</h2>
          </div>
          <form className="account-form">
            <div className="form-group">
              <label htmlFor="email2">
                Email<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                id="email2"
                required
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass3">
                Password<span>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="pass3"
                required
                ref={passwordRef}
              />
            </div>
            <div className="form-group checkgroup">
              <input type="checkbox" id="bal2" required defaultChecked />
              <label htmlFor="bal2">remember password</label>
              <a href="#0" className="forget-pass">
                Forget Password
              </a>
            </div>
            <div className="form-group text-center">
              <input
                defaultValue="log in"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  loginUser();
                }}
              />
            </div>
          </form>
          <div className="option">
            Don't have an account? <a href="sign-up.html">sign up now</a>
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

export default withRouter(Login);
