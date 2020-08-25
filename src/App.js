import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './BlackKeyboard';
import './WhiteKeyboard';
import { WhiteKey } from './WhiteKeyboard';
import { BlackKey } from './BlackKeyboard';
//import useKeyPress from './useKeyPress';
//Use arrow function for component
export const App = () => {
  // 13
  const [keyMap, setKeyMap] = useState({
    a: false,
    w: false,
    e: false,
    s: false,
    q: false,
  });
  const [activeColor, setActiveColor] = useState({
    a: '#ffffff',
  });
  const handleChange = (e) => {
    setActiveColor(e.target.activeColor);
  };

  const handleSubmit = (e) => {
    e.style.backgroundcolor = { activeColor };
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 97) {
      handleSubmit();
    }
  };
  useEffect(() => {
    document.addEventListener('keypress', function (e) {
      if (keyMap[e.key] !== undefined) {
        setKeyMap({ ...keyMap, [e.key]: true });
        setActiveColor({ ...activeColor, [e.key]: '#f5f5f5' });
        console.log('hi');
      }
    });
    document.addEventListener('keyup', function (e) {
      if (keyMap[e.key] !== undefined) {
        setKeyMap({ ...keyMap, [e.key]: false });
        setActiveColor({ ...activeColor, [e.key]: '#ffffff' });
        console.log('bye');
      }
    });

    return () => {
      console.log('cleanup');
      document.removeEventListener('keypress', document);
      document.removeEventListener('keyup', document);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My React Piano</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div>"Where My Piano will be"</div>

      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <WhiteKey />
      <div>"Where My Mode Selector will be"</div>
    </div>
  );
};
//default app call from index.js App by default even without the {}.
//As an example "{useState, useEffect}" is called this way
export default App;
