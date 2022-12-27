import { Component } from "react";

const arr=[10, 20, 30];

console.log(arr.map((x, index)=>x+1))

class MyComponents extends Component{
    //방법 1. 생성자(constructor) //constructor(props){}
    // constructor(){ {/*생성자 */}
    //     this.state = {  //여기서 this는 MyComponents > this.state: MyComponents의 state 
    //         //상태변수 (state variable)
    //         number : 0, // key : value 형태
    //     }
    // }

    //방법 2.
    // 생성자에다 안넣을래 
    //상태변수 선언
    state = {
        number : 0,
        message : 'th1-703',
        validate : false,
        messages  : ['AngularJS', 'React', 'Vue', 'Ember'] //배열 형태로 넣을 수 있음
    }

    render(){ //그리는 함수
        //변수 선언
        const {name, str} = this.props;
        const {message, number, validate, messages} = this.state;
        let erum="dabi";
        let x, y, z = 3;
        return(
            <>
            <h3>Hello {message}</h3>
            <p>This is {erum}</p>
            <span>Good to see you, dayeong and {erum}</span>
            <h2>{validate}</h2>
            <h3>{messages}</h3>
            <h3>{messages[3]}</h3>
            <p>-------------------------------------</p>
            <h4>{messages.map((item, index, arr)=>console.log(item + ', ' + index + ", " + arr))}</h4>
            <p>----------------------------------------</p>
            <p>{x}, {y}, {z}</p>

            <h1>{name}</h1>
            <h1>{str}</h1>
            </>
        )
    }

}

export default MyComponents;