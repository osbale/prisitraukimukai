import React from "react";

function Alert() {
  return (
    <div>
      <div className="uk-alert-danger" uk-alert>
        <a className="uk-alert-close" uk-close></a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  );
}

export default Alert;
