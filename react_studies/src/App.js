import './App.css';
import { StyledButton } from './components/Button.style';
import { StyledText } from './components/Div.style';

// eslint-disable-next-line react/jsx-pascal-case
function App() {
  return (
    <div className="App">
      <StyledButton >New button</StyledButton>
      <StyledText/>
    </div>
  );
}

export default App;
