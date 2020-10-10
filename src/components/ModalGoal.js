import React, { useState } from 'react';
import UIkit from 'uikit'

const ModalGoal = (props) => {

const {setDbGoal} = props;

const [newGoal, setNewGoal] = useState(0)

const updateInfo = () => {
    setDbGoal(newGoal);
    UIkit.notification({
        message: "Information updated successfully!",
        status: "success",
      });
}


    return (
        <div id="modal-goal" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title uk-text-center">Goals</h2>
                <p className="uk-text-center">Here you can update your Pull Up goal!</p>
                    <form action="" className="uk-form uk-text-center">
                    <input className="uk-input uk-width-large" placeholder="Enter pullup goal" type="number" onChange={e => setNewGoal(e.target.value)} min="0"></input>
                    <div className="uk-margin-top">
                        <button className="uk-button uk-button uk-modal-close" type="button" onClick={updateInfo}>Save</button>
                    </div>
                    </form>
            </div>
        </div>
    );
};

export default ModalGoal;