import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  
  const {
    handleLogout,
    userEmail
  } = props;

  return (
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          <h1 className="uk-text-lead">Hello, <span className="uk-text-bold">{userEmail}</span></h1>
          <nav>
            <ul className="uk-list uk-list-divider uk-margin-large-top">
              <li>
                    <button onClick={() => props.onChange("Home")} className="uk-button uk-width-1-1">Home</button>
              </li>
              <li>
                  <button onClick={() => props.onChange("Hiscores")} className="uk-button uk-width-1-1">Hiscores</button>
              </li>
              <li>
                  <button onClick={() => props.onChange("Following")} className="uk-button uk-width-1-1">Following</button>
              </li>
              <li>
              <Link to="/login" className="uk-link-reset">               
                    <button onClick={handleLogout} className="uk-button uk-width-1-1">Log Out</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

export default Navigation;
