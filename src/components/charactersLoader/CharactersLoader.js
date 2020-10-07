import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import CharacterInfo from "./CharacterInfo";
import firebase from "firebase";

const CharactersLoader = () => {
  const getData = () => {
    let userId = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then(function (snapshot) {
        setDbGoal(snapshot.val().goal);
        setDbTotal(snapshot.val().total);
      });
  };

  function setData() {
    let userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        total: total,
        goal: goal,
        updated: firebase.database.ServerValue.TIMESTAMP,
      });
    firebase
      .database()
      .ref("leaderboard/" + userId)
      .set({
        total: total,
        updated: firebase.database.ServerValue.TIMESTAMP,
      });
  }

  const [dbGoal, setDbGoal] = useState(0);
  const [dbTotal, setDbTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [goal, setGoal] = useState(100);
  const isFirstRun = useRef(true);

  useEffect(() => {
    getData();
    console.log("data gotten ");
  }, []);

  const decrementFn = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  const incrementFn = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const calculationsFn = () => {
    setTotal(dbTotal + count);
    setGoal(dbGoal);
    console.log("newTotal achieved");
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setData();
    console.log("db updated");
    getData();
    console.log("data gotten");
  }, [total]);

  return (
    <div>
      <div className="prisitraukimai uk-flex uk-flex-between uk-flex-middle">
        <button
          className="uk-button"
          onClick={() => {
            decrementFn();
          }}
        >
          -
        </button>
        <p id="sum" className="">
          {count}
        </p>
        <button
          className="uk-button"
          onClick={() => {
            incrementFn();
          }}
        >
          +
        </button>
      </div>
      <hr></hr>
      <CharacterInfo
        dbGoal={dbGoal}
        dbTotal={dbTotal}
        dbLeft={dbGoal - dbTotal}
      />
      <hr></hr>
      <div className="uk-flex uk-flex-center uk-flex-column">
        <button
          className="uk-button uk-margin-top"
          onClick={() => calculationsFn()}
        >
          Patvirtinti
        </button>
        <button
          className="uk-button uk-margin-top"
          type="button"
          data-uk-toggle="target: #modal-example"
        >
          Nustatymai
        </button>
        <Modal setDbGoal={setDbGoal} />
      </div>
    </div>
  );
};

export default CharactersLoader;
