
/* eslint-disable  */

import './App.css';
import MyComponents from './components/MyComponents';
import Hello from './components/Hello';


function App() {
  const str="React!!! - 이도연";
  const name = "함수형 컴포넌트";

  return (
    <div className="App">
      <h1>Hello React</h1>
      <MyComponents name={name} str={str} />
      <Hello kbs ={name} str={str} hi={'안녕하세요 리액트거든'}/>
    </div>
  );
}

export default App;
