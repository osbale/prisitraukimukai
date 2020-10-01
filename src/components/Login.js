import React, { useEffect, useState } from "react";
import UIkit from "uikit";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    clearErrors,
  } = props;

  if (passwordError != "") {
    UIkit.notification({
      message: passwordError,
      status: "warning",
    });
    clearErrors();
  }

  if (emailError != "") {
    UIkit.notification({
      message: emailError,
      status: "warning",
    });
    clearErrors();
  }

  return (
    <div className="uk-container uk-position-center">
      <div className="uk-card uk-text-center uk-card-large uk-card-default uk-card-body">
        <h3>Prisijungimas</h3>

        <form className="uk-form">
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className="uk-input"
                type="text"
                name="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: lock"
              ></span>
              <input
                className="uk-input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="uk-flex uk-flex-column">
            {hasAccount ? (
              <>
                <button
                  onClick={handleLogin}
                  className="uk-button uk-button-small uk-text-center uk-width-1-1"
                >
                  Log in
                </button>
                <p>
                  Don't have an account?
                  <span className="uk-link" onClick={() => setHasAccount(!hasAccount)}>
                    Sign up!
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  onClick={handleSignup}
                  className="uk-button uk-button-small uk-text-center uk-width-1-1"
                >
                  Sign up
                </button>
                <p>
                  Have an account?
                  <span className="uk-link"
                    onClick={() => {
                      setHasAccount(!hasAccount);
                    }}
                  >
                    Log in!
                  </span>
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
