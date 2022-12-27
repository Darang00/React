import logo from './logo.svg';

// eslint-disable
import './App.css';
import MyComponents from './components/MyComponents';
import Hello from './components/Hello';

function App() {
const str="Apps.js 의 str";
const name = "Apps.js 의 name";

  return (
    <div className="App">
      <h1>Hello react</h1>
      <MyComponents name={name} str={str}/>


    <Hello kbs = {str} name={name}/>

    </div>
  );
}

export default App;
