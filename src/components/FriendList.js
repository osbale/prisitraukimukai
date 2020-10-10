import React, { useRef } from "react";
import ModalFriend from "./ModalFriend";
import firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import ModalProfile from "./ModalProfile";

function FriendList() {
  let followingList = [];
  const [following, setFollowing] = useState([]);
  const [info, setInfo] = useState('');
  const [goal, setGoal] = useState(0);
  const [total, setTotal] = useState(0);
  const [add, setAdd] = useState(false);

  let userId = firebase.auth().currentUser.uid;

  const updateData = (props) => {
    setInfo(props);
    firebase.database().ref("/users/" + props.followingId).once("value").then(function (snapshot) {
      setGoal(snapshot.val().goal);
      setTotal(snapshot.val().total);
    });
  }

  useEffect(() => {
    firebase
      .database()
      .ref("/users/" + userId + "/following/")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
              if(childSnapshot.val().follow){
                followingList.push({
                  email: childSnapshot.val().email,
                  follow: childSnapshot.val().follow,
                  followingId: childSnapshot.key,
                  goal: childSnapshot.val().goal,
                  total: childSnapshot.val().total
                })
              };
          setFollowing(
            followingList.map((data, index) => {
              return (
                <tr key={index}>
                  <td>icon</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      className="uk-button"
                      data-uk-toggle="target: #modal-profile"
                      onClick={() => updateData(data)}
                    >
                      profile
                    </button>
                  </td>
                </tr>
              );
            })
          );
        });
      });
      return setAdd(false)
  }, [add]);

  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
        <table className="uk-table uk-table-justify uk-table-divider uk-text-center">
          <thead>
            <tr>
              <th className="uk-width-small uk-text-center">Status</th>
              <th className="uk-text-center">Following</th>
              <th className="uk-text-center">Profile</th>
            </tr>
          </thead>
          <tbody>{following}</tbody>
        </table>
        <ModalProfile email={info.email} goal={info.goal} total={info.total} followingId={info.followingId} setAdd={setAdd}/>
        <button className="uk-button" data-uk-toggle="target: #modal-friends">
          New Follow
        </button>
        <ModalFriend setAdd={setAdd} />
      </div>
    </div>
  );
}

export default FriendList;
