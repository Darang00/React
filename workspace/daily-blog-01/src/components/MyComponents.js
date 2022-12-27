import { Component } from "react";


function logArrayElements(element,index, array) { 
    console.log('a[' + index + '] =    ' + element);
}
[2,5,9].forEach(logArrayElements);

class MyComponents extends Component {

    // constructor(){   //constructor(props){
    //     this.state = {
    //         //상태변수(state variable)
    //         number : 0,   // int number = 0;
    //         str : '',     // String str = "";
    //     }
    // }

    // 상태변수 선언
    state = {
        number : 0,
        message : 'th1-703',
        validate : false,
        messages: ['AngularJS', 'React', 'Vue', 'Ember']
    }
    

    render(){
        //변수선언
        const {name, str} = this.props;
        const {message, number, validate, messages} =  this.state;
        let irum = 'yuna';
        let x,y,z = 3;
        
        return(
            <>
                <h1>{str}</h1>
                <h3>Hello {message}</h3>
                <p>{irum} 님 반가워요!!</p>
                <span>도연님도 {number} 반가워요</span>
                <h2>{validate}</h2>
                {/* <h3>{messages}</h3>
                <h3>{messages[3]}</h3> */}
                <p>------------------------</p>
                <h4>{ messages.map((item, i, arr) => console.log(item+','+ i+"," +arr)) }</h4>
                <p>------------------------</p>
                <p>{x}, {y}, {z}</p>

                <h1>{name}</h1>
            </>
        )
    }

}

export default MyComponents; 