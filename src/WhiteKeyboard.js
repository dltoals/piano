import React, { useState, useEffect } from 'react';

export const WhiteKey = () => {
  const [activeColor, setActiveColor] = useState({
    a: '#ffffff',
    z: '#ffffff',
  });
  useEffect(() => {
    document.addEventListener('keypress', function (e) {
      if (activeColor[e.key] !== undefined) {
        setActiveColor({ ...activeColor, [e.key]: '#f5f5f5' });
        console.log('hi');
      }
    });
    document.addEventListener('keyup', function (e) {
      if (activeColor[e.key] !== undefined) {
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
  return <button className="White-key" id="AKey" onKeyPress></button>;
};
export default WhiteKey;
