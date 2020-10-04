import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import CharacterInfo from "./CharacterInfo";
import firebase from 'firebase'

const CharactersLoader = () => {

  let user = firebase.auth().currentUser;
  let dbTotal, dbGoal;

  function readUserData() {
    firebase.database().ref('users/' + user.uid).once('value',(snap) => {
    dbGoal = snap.val().goal;
    dbTotal = snap.val().total;
    console.log(dbGoal);
    })
  }

  

  const [goal, setGoal] = useState(100);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [left, setLeft] = useState(goal);



  function setUserData() {
    firebase.database().ref('users/' + user.uid).set({
      goal: goal,
      total: total,
      updated: firebase.database.ServerValue.TIMESTAMP
    });
  }

  function decrementCount() {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function updateStats() {
    if (count <= left) {
      setTotal((total) => total + count);
      setLeft((left) => left - count);
    }
  }

  useEffect(() => {
    readUserData()
    setUserData()
  })

  return (
    <div>
      <div className="prisitraukimai uk-flex uk-flex-between uk-flex-middle">
        <button className="uk-button" onClick={decrementCount}>
          -
        </button>
        <p id="sum" className="">
          {count}
        </p>
        <button className="uk-button" onClick={incrementCount}>
          +
        </button>
      </div>
      <hr></hr>
      <CharacterInfo count={count} total={total} goal={goal} left={left} />
      <hr></hr>
      <div className="uk-flex uk-flex-center uk-flex-column">
      <button className="uk-button uk-margin-top" onClick={updateStats}>
        Patvirtinti
      </button>
      <button
          className="uk-button uk-margin-top"
          type="button"
          data-uk-toggle="target: #modal-example"
        >
          Nustatymai
        </button>
        <Modal setGoal={setGoal} setTotal={setTotal} setLeft={setLeft} />
        </div>
    </div>
  );
};

export default CharactersLoader;
