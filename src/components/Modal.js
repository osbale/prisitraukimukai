import React, { useState } from 'react';
import UIkit from 'uikit'

const Modal = (props) => {

const {setGoal, setTotal, setLeft} = props;

const [newGoal, setNewGoal] = useState(0)

const updateInfo = () => {
    setGoal(newGoal);
    setTotal(0);
    setLeft(newGoal);
    UIkit.notification({
        message: "Information updated successfully!",
        status: "success",
      });
}


    return (
        <div id="modal-example" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title uk-text-center">Goals</h2>
                <p className="uk-text-center">Here you can update your Pull Up goal!</p>
                    <form action="" className="uk-form uk-text-center">
                    <input className="uk-input uk-width-large" placeholder="Tikslas" type="number" onChange={e => setNewGoal(e.target.value)} min="0"></input>
                    <div className="uk-margin-top">
                        <button className="uk-button uk-button uk-modal-close" type="button" onClick={updateInfo}>Save</button>
                    </div>
                    </form>
            </div>
        </div>
    );
};

export default Modal;