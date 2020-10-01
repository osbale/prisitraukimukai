import React from 'react';
import CharactersLoader from './charactersLoader/CharactersLoader';
import PullupCharacter from './charactersLoader/PullupCharacter';

const Characters = () => {

    console.log();
    return (
        <div>
                <div>
                    <div className="Character uk-card uk-card-default uk-card-body uk-animation-fade">
                        <PullupCharacter />
                        <CharactersLoader />
                    </div>
                </div>
            </div>
    );
};

export default Characters;