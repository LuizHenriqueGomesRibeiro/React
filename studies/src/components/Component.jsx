import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 880px; // Ensure this is enough to fit 4 boxes considering their width and margin.
  gap: 20px; // This sets both vertical and horizontal gaps between items.
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
`;

const Box = styled.div`
  width: 100px; // Fixed width
  height: 100px; // Fixed height
  padding: 20px;
  margin: 10px; // Ensure the total width calculation accounts for this margin.
  border: 1px solid black;
  text-align: center;
  background-color: lightgrey;
`;

export default function Component() {
  const [activeBoxes, setActiveBoxes] = useState(Array(8).fill(false));

  const toggleBox = (index) => {
    setActiveBoxes(current =>
      current.map((active, i) => (i === index ? !active : active))
    );
  };

  return (
    <Wrapper>
      <div>
        {Array.from({ length: 8 }, (_, index) => (
          <Button key={index} onClick={() => toggleBox(index)}>
            Toggle Box {index + 1}
          </Button>
        ))}
      </div>
      <Container>
        {activeBoxes.map((isActive, index) =>
          isActive && <Box key={index}>Box {index + 1}</Box>
        )}
      </Container>
    </Wrapper>
  );
};
