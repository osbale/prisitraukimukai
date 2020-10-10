import React from "react";
import PullupCharacter from "./charactersLoader/PullupCharacter";
import firebase from "firebase";

function ModalProfile(props) {
  let userId = firebase.auth().currentUser.uid;
  return (
    <div id="modal-profile" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title uk-text-center uk-text-bold">
          {props.email}
        </h2>
        <div className="uk-flex uk-flex-center">
          <PullupCharacter style={{ height: "500px" }}></PullupCharacter>
        </div>
        <div className="info">
          <p className="uk-text-bold uk-text-large uk-text-center">
            Total pullups:{" "}
            <span className="uk-text-warning">{props.total}</span>
          </p>
          <p className="uk-text-bold uk-text-large uk-text-center">
            Pullup goal: <span className="uk-text-success">{props.goal}</span>
          </p>
        </div>
        <div className="uk-flex uk-flex-center">
          <button
            className="uk-button uk-fex uk-modal-close"
            onClick={() =>{
                props.setAdd(true);
              firebase
                .database()
                .ref()
                .child("users/" + userId + "/following/" + props.followingId)
                .set({
                  follow: false,
                })
            }}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProfile;
