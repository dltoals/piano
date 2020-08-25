import { useState, useEffect } from 'react';

export function useKeyPress(targetKey) {
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
      }
    });

    return () => {
      console.log('cleanup');
      document.removeEventListener('keypress', document);
      document.removeEventListener('keyup', document);
    };
    // eslint-disable-next-line
  }, []);
}
export default useKeyPress;
