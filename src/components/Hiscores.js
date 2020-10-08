import React, { useEffect } from "react";
import firebase from "firebase/app";
import { useState } from "react";

function Hiscores() {

  let orderedList = [];
  const [hiscores, setHiscores] = useState();

  const getData = async () => {
    let db = firebase
      .database()
      .ref("/leaderboard/")
      .orderByChild("total")
      .limitToLast(7);
    db.once("value").then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        orderedList.push(childSnapshot.val());
        setHiscores(
          orderedList
            .slice(0)
            .reverse()
            .map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.userEmail}</td>
                  <td>{data.total}</td>
                </tr>
              );
            })
        );
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    console.log(hiscores),
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
          <tbody>{hiscores}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Hiscores;
