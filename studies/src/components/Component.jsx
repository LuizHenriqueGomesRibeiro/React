import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const boxes = [
  { id: 1, color: 'tomato' },
  { id: 2, color: 'gold' },
  { id: 3, color: 'aquamarine' },
  { id: 4, color: 'coral' },
  { id: 5, color: 'lightgreen' },
  { id: 6, color: 'skyblue' },
  { id: 7, color: 'plum' },
  { id: 8, color: 'lightsteelblue' },
];

const BoxesComponent = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);

  const handleClick = id => {
    setActiveBoxes(current => {
      const isActive = current.includes(id);
      return isActive ? current.filter(boxId => boxId !== id) : [...current, id];
    });
  };

  const transitions = useTransition(activeBoxes, {
    keys: item => item,
    from: { opacity: 0, transform: 'translateX(0px)' },
    enter: item => async (next, cancel) => {
      await next({ opacity: 1, transform: `translateX(${activeBoxes.indexOf(item) * 110 - (activeBoxes.length - 1) * 55}px)` });
    },
    update: item => async (next, cancel) => {
      await next({ opacity: 1, transform: `translateX(${activeBoxes.indexOf(item) * 110 - (activeBoxes.length - 1) * 55}px)` });
    },
    leave: { opacity: 0, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <div style={{ marginBottom: '20px' }}>
        {boxes.map(box => (
          <button key={box.id} onClick={() => handleClick(box.id)} style={{ margin: '5px' }}>
            Toggle Box {box.id}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '100px' }}>
      {transitions((style, item) => {
  const box = boxes.find(box => box.id === item);
  if (!box) return null; 

  return (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        width: '100px',
        height: '100px',
        backgroundColor: box.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Box {item}
    </animated.div>
  );
})}
      </div>
    </div>
  );
};

export default BoxesComponent;
