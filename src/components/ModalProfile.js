import React from "react";
import PullupCharacter2 from "./charactersLoader/PullupCharacter2";
import firebase from "firebase";

function ModalProfile(props) {
  let userId = firebase.auth().currentUser.uid;
  return (
    <div id="modal-profile" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body">
      <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <h2 className="uk-modal-title uk-text-center uk-text-bold">
          {props.email}
        </h2>
        <div className="uk-flex uk-flex-center">
          <PullupCharacter2 style={{ height: "500px" }}></PullupCharacter2>
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
