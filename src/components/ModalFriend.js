import React, { useEffect, useRef } from "react";
import { useState } from "react";
import firebase from "firebase";

function ModalFriend() {
  const [friend, setFriend] = useState("");
  let availableFriends = [];
  const [friendList, setFriendList] = useState();
  const isFirstRun = useRef(true);
  const [addFriend, setAddFriend] = useState();

  const findFriend = (e) => {
    setFriend(e.target.value);
  };

/*   let userId = firebase.auth().currentUser.uid;

  function setData(props) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        friends: props
      });
  }
 */

  useEffect(() => {
    if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
    firebase
      .database()
      .ref("/users/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          if (childSnapshot.val().userEmail.includes(friend)) {
            availableFriends.push(childSnapshot);
            setFriendList(
              availableFriends.map((friends) => (
                <tr key={friends.key}>
                  <td>{friends.val().userEmail}</td>
                  <td>
                    <button className="uk-button" onClick={ () => {
                        setAddFriend(friends.key);
                    }}>Add friend</button>
                  </td>
                </tr>
              ))
            );
          }
        });
      });
  }, [friend]);


  return (
    <div>
      <div id="modal-friends" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className="uk-modal-title uk-text-center">Add new Friend</h2>
          <p className="uk-text-center">Here you can add new friends!</p>
          <form action="" className="uk-form uk-text-center">
            <input
              className="uk-input"
              placeholder="Tikslas"
              type="text"
              onChange={(e) => findFriend(e)}
            ></input>
            <div className="uk-margin-top">
              <button
                className="uk-button uk-button uk-modal-close"
                type="button"
              >
                Search
              </button>
            </div>
          </form>
          <table className="uk-table uk-table-small uk-table-divider">
            <thead>
              <tr>
                <th>Friend name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>{friendList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModalFriend;
