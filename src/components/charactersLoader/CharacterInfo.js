import React from "react";

function CharacterInfo(props) {
  const { total, goal, left } = props;

  return (
    <div className="information uk-margin-top uk-text-medium">
      <p className="uk-text-large uk-text-bold">Total Pull Up's: <span className="uk-text-warning">{total}</span></p>
      <p className="uk-text-large uk-text-bold">Pull Up Goal: <span className="uk-text-success">{goal}</span></p>
      <p className="uk-text-large uk-text-bold">Pull Up's Left: <span className="uk-text-danger">{left}</span></p>
    </div>
  );
}

export default CharacterInfo;
