import React from 'react';
import './BlackKeyboard';
import './WhiteKeyboard';
import { WhiteKey } from './WhiteKeyboard';
import { BlackKey } from './BlackKeyboard';

export const Piano = () => {

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 65) {
          document.getElementById('AKey').focus();
        }

  return <button className="White-key" id="AKey"></button>;
};
export default Piano;
