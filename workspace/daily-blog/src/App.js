import logo from './logo.svg';

// eslint-disable
import './App.css';
import { useState } from 'react';




function App() {
  let nickName='dayeong';
  let [title, setTitle] = useState(['혜화 갈비 맛집', '홍대 우동', '강남 소주맛집']);
  let [like, setLike] = useState([0, 0, 0]);
  return(
    <div className="App">
      <header>
      <div className='nav'>My lovely daily blog</div>
      <p>Welcome, {nickName}</p>
      <a href='https://cafe.naver.com/douzone3' rel='noopener noreferrer' target='_blank'></a>

      </header>
      {title.map((data, index) =>
        <div key={index}>
          <div className='list'>
          <h4> {data}<span onClick={() => {
              let likearr = [...like]; //Spread Operator 
              likearr[index] = like[index]+1;
              console.log(likearr)
              setLike(likearr); //like를 직접 쓰지 않고 setLike 사용해서 하트에 onClick 이벤트 발생할 때 마다 값 증가 
          }}>💚</span>
          {like[index]}</h4>
          <h5>2022.12.21</h5>
          </div>
        </div>             
      )}
    </div>
  )
 } 

 export default App;