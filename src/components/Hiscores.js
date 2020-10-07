import React, { useEffect } from "react";
import firebase from "firebase/app";
import { useState } from "react";



function Hiscores() {


  /*   const record = [
    firebase.database().ref(`leaderboard/${userId1}`).once(`value`),
    firebase.database().ref(`leaderboard/${userId2}`).once(`value`),
  ];

  return Promise.all(records).then(snapshots => {
    const record1 = snapshots[0].val();
    const record2 = snapshots[1].val();
  }) */


  const getData = () => {
    
    return firebase
      .database()
      .ref("/leaderboard/")
      .once("value")
      .then(function (snapshot) {
        console.log(snapshot.val());
      });
  };
  
  useEffect(()=> {
    getData();
  }, [])

  return (
    <div>
      <div className="Character uk-card uk-card-default uk-card-body uk-animation-fade">
        <table className="uk-table uk-table-divider uk-text-center">
          <thead>
            <tr>
              <th className="uk-width-small uk-text-center">Place</th>
              <th className="uk-text-center">Name</th>
              <th className="uk-text-center">Pull-Ups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>asdasd@gmail.com</td>
              <td>121</td>
            </tr>
            <tr>
              <td>2</td>
              <td>asdasd1@gmail.com</td>
              <td>100</td>
            </tr>
            <tr>
              <td>3</td>
              <td>asdasd2@gmail.com</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hiscores;
