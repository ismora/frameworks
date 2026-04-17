import './App.css';
import ButtonCounter from './components/button-counter/button-counter';

function App() {
  return (
    <body>
      <div className="main-container">
        <div className="column">
          <ButtonCounter name="A" />
          <ButtonCounter name="B" />
        </div>
      </div>
    </body>
  );
}

export default App;
