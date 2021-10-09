import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';
import FunctionalWithArrowFnComponent from './Component/FunctionalWithArrowFnComponent';
import ClassComponent from './Component/ClassComponent';
import WithJSXComponent from './Component/WithJsxComponent';
import WithoutJSXComponent from './Component/WithoutJsxComponent';
import PropWithFnComponent from './Component/PropWithFnComponent';
import PropWithClassComponent from './Component/PropWithClassComponent';
import StateClassComponent from './Component/StateClassComponent';
import StateFnComponent from './Component/StateFnComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <FunctionalWithArrowFnComponent />
      <ClassComponent />
      <WithJSXComponent />
      <WithoutJSXComponent />
      <PropWithFnComponent name='Ti Hoe' />
      <PropWithFnComponent name='Rawoof' />
      <PropWithClassComponent name='William' />
      <PropWithClassComponent name='Jack' />
      <StateClassComponent />
      <StateFnComponent />
    </div>
  );
}

export default App;
