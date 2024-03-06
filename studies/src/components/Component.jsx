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

  const handleClick = (id) => {
    setActiveBoxes((current) => {
      const isActive = current.includes(id);
      return isActive ? current.filter((boxId) => boxId !== id) : [...current, id];
    });
  };

  const transitions = useTransition(activeBoxes, {
    keys: (item) => item,
    from: { opacity: 0, transform: 'translateX(0px) translateY(0px)' },
    enter: (item) => {
      const index = activeBoxes.indexOf(item);
      const xPos = index % 4 * 110 - 165; // Centraliza as caixas ao ajustar pela largura
      const yPos = Math.floor(index / 4) * 120; // Move caixas para uma nova linha após a 4ª caixa
      return { opacity: 1, transform: `translateX(${xPos}px) translateY(${yPos}px)` };
    },
    leave: { opacity: 0, transform: 'translateX(0px) translateY(0px)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <div style={{ marginBottom: '20px' }}>
        {boxes.map((box) => (
          <button key={box.id} onClick={() => handleClick(box.id)} style={{ margin: '5px' }}>
            Toggle Box {box.id}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', minHeight: '240px', flexWrap: 'wrap' }}>
        {transitions((style, item) => {
          const box = boxes.find((b) => b.id === item);
          return (
            <animated.div
              key={item}
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
