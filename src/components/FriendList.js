import React from "react";
import ModalFriend from "./ModalFriend";
import firebase from "firebase";


function FriendList() {


  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
        <table className="uk-table uk-table-justify uk-table-divider uk-text-center">
          <thead>
            <tr>
              <th className="uk-width-small uk-text-center">Status</th>
              <th className="uk-text-center">Friend Name</th>
              <th className="uk-text-center">Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-text-success"><span uk-icon="user"></span></td>
              <td>
              oskaras@gmail.com
              </td>
              <td>
                <button className="uk-button" type="button">
                  Profile
                </button>
              </td>
            </tr>
            <tr>
            <td className="uk-text-danger"><span uk-icon="user"></span></td>
              <td>
              oskaras123@gmail.com
              </td>
              <td>
                <button className="uk-button" type="button">
                  Profile
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="uk-button"
        data-uk-toggle="target: #modal-friends">Add Friend</button>
        <ModalFriend />
      </div>
    </div>
  );
}

export default FriendList;
