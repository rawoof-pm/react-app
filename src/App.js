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
import DestrcPropWithFnComponent from './Component/DestrcPropWithFnComponent';
import DestrcPropWithClassComponent from './Component/DestrcPropWithClassComponent';
import DestrcStateWithClassComponent from './Component/DestrcStateWithClassComponent';
import DestruWithFnComponent from './Component/DestruStateWithFnComponent';

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

      <DestrcPropWithFnComponent name='William' />
      <DestrcPropWithClassComponent name='Ti Hoe' />

      <DestrcStateWithClassComponent />
      <DestruWithFnComponent />

    </div>
  );
}

export default App;
