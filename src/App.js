import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Navigation from "./components/Navigation";
import Hiscores from "./components/Hiscores";
import FriendList from "./components/FriendList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import fire from "./database/fire";
import firebase from "firebase"


function App() {
  /* Login Auth FireBase */

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPasswordError("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password).then((u) => {
        firebase.database().ref('users/' + u.user.uid).set({
          goal: 1000,
          total: 0,
          userEmail: u.user.email,
          updated: firebase.database.ServerValue.TIMESTAMP
        })
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
    
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  /* menu Display */

  let component = "";
  const [menu, setMenu] = useState("Home");

  if (menu === "Home") {
    component = <Characters />;
  } else if (menu === "Hiscores") {
    component = <Hiscores />;
  } else if (menu === "Following") {
    component = <FriendList />;
  } else if (menu === "Log Out") {
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          {user ? (
            <Route path="/">
              <Header />
              <div
                className="uk-padding-large uk-container-expand uk-margin-medium-top uk-text-center uk-child-width-1-1 uk-child-width-1-2@l"
                data-uk-grid
              >
                <Navigation
                  userEmail = {user.email}
                  handleLogout={handleLogout}
                  onChange={(value) => setMenu(value)}
                />
                {component}
              </div>
            </Route>
          ) : (
            <Route path="/login">
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                clearErrors={clearErrors}
                
              />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
