import React, { useEffect, useRef } from "react";
import { useState } from "react";
import firebase from "firebase";

function ModalFriend(props) {

  const {setAdd} = props;

  const [friend, setFriend] = useState("");
  const [friendList, setFriendList] = useState([]);
  const isFirstRun = useRef(true);

  const findFriend = (e) => {
    setFriend(e.target.value);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    let availableFriends = [];

    const updateFriend = () => {
      availableFriends = [];
    }
  
    
  let userId = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref("/users/")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          if (childSnapshot.val().userEmail.includes(friend)) {
            availableFriends.push(childSnapshot);
            setFriendList(
              availableFriends.map((friends, index) => (
                <tr key={index}>
                  <td>{friends.val().userEmail}</td>
                  <td>
                    <button
                      className="uk-button"
                      onClick={() => {
                        updateFriend();
                        setAdd(true);
                        firebase
                          .database()
                          .ref()
                          .child(
                            "users/" + userId + "/following/" + friends.key
                          )
                          .set({
                            follow: true,
                            email: friends.val().userEmail,
                            goal: friends.val().goal,
                            total: friends.val().total,
                          });
                        }}
                    >
                      Follow
                    </button>
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
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <h2 className="uk-modal-title uk-text-center">Follow new people!</h2>
          <p className="uk-text-center">Search for new people and track their progress</p>
          <form action="" className="uk-form uk-text-center">
            <input
              className="uk-input"
              placeholder="Type in name"
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
          <table className="uk-table uk-table-small uk-table-divider uk-table-responsive">
            <thead>
              <tr>
                <th>Friend name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {friendList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModalFriend;
