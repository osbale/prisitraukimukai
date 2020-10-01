import React from "react";

function FriendList() {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
        <table class="uk-table uk-table-justify uk-table-divider uk-text-center">
          <thead>
            <tr>
              <th class="uk-width-small uk-text-center">Status</th>
              <th class="uk-text-center">Friend Name</th>
              <th class="uk-text-center">Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-text-success"><span uk-icon="user"></span></td>
              <td>
              oskaras@gmail.com
              </td>
              <td>
                <button class="uk-button" type="button">
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
                <button class="uk-button" type="button">
                  Profile
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FriendList;