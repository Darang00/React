
import './App.css';
import Link from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import data from './data';
import {useState} from 'react';

function App() {
    let [shirts, setShirts] = useState(data);

  return (
    <div className="App">

      {/* 내비*/}
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">KOSAShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* 점보트론 */}
    <div className="jumbotron">
    <img src={process.env.PUBLIC_URL + '/KnowMeTooWell.png'} alt='boys' className='titleImage' width='100%' height='100%'/>

        <h1 className="display-4">Shirts</h1>
        <p className="lead">Love all of your colours, personalities, traces and memories</p>
        <hr className="my-4"/>
        <p>Come take my arms and go, I'll be yours for sure yh!</p>
        <a className="btn btn-primary btn-lg" href="#home" role="button">More Product</a>
      </div>

  <div className='container'>
      <div className='row'>
        {/*
      <div className='col-md-4'> pd.{(shirts[0].id + 1)}
        <img src="https://image.msscdn.net/images/goods_img/20220527/2586709/2586709_1_500.jpg" alt='product' width='95%' height='60%' />
        <h4>{shirts[0].title}</h4>
        <p>{shirts[0].content}</p>
        <p>{shirts[0].price}</p>
      </div>
      <div className='col-md-4'>pd.{(shirts[1].id + 1)}
      <img src="https://img.29cm.co.kr/next-product/2022/06/14/cc044d0c960b48a9bf22bd5504453a4f_20220614141745.jpg?width=700" alt='product' width='95%' height='60%' />
      <h4>{shirts[1].title}</h4>
        <p>{shirts[1].content}</p>
        <p>{shirts[1].price}</p>
      </div>
      <div className='col-md-4'>pd.{(shirts[2].id + 1)}
      <img src="https://images.kolonmall.com/Prod_Img/10003104/2022/LS8/K1651544982404036NA01_LS8.jpg" alt='product' width='95%' height='60%'/>
      <h4>{shirts[2].title}</h4>
        <p>{shirts[2].content}</p>
        <p>{shirts[2].price}</p>
  </div> */}
{/*map 함수 쓰는 법 참고한 링크: https://jurgen-94.tistory.com/16 */}
{shirts.map(function(a){ //a가 shirts 안의 데이터, i 는 shirts의 index
  return(
    <div className='col-md-4' key={a.id}> pd.{(a.id + 1)}
    <img src={a.img_sumnail} alt='product' width='95%' height='75%' />
    <h4>{a.title}</h4>
    <p>{a.content}</p>
    <p>{a.price}</p>
  </div>

  )
 
})
}



      {/*
          {data.map((item, index) => {

            return <>

              <div className='col-md-4'>
                <img src={item.img1} onClick={() => { onoff(index) }} className='img-fluid' />
                <h4>{item.title}</h4>
                <h5>{item.content}</h5>
                <h5>{item.price}</h5>
              </div>

              {
                modal[index] === true
                  ? <MyModal img2={item.img2} />
                  : null
              }
            </>

          })
          }
      
      
      */}
      </div>
    </div>
      
   
    </div>

  );
}

export default App;
