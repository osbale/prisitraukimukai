import React from "react";

function CharacterInfo(props) {
  const { dbTotal, dbGoal, dbLeft } = props;

  return (
    <div className="information uk-margin-top uk-text-medium">
      <p className="uk-text-large uk-text-bold">Total Pull Up's: <span className="uk-text-warning">{dbTotal}</span></p>
      <p className="uk-text-large uk-text-bold">Pull Up Goal: <span className="uk-text-success">{dbGoal}</span></p>
      <p className="uk-text-large uk-text-bold">Pull Up's Left: <span className="uk-text-danger">{dbLeft}</span></p>
    </div>
  );
}

export default CharacterInfo;
