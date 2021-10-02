import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';
import FunctionalWithArrowFnComponent from './Component/FunctionalWithArrowFnComponent';
import ClassComponent from './Component/ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <FunctionalWithArrowFnComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
