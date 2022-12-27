function Hello(props){ //예약 키워드 props
    return( //return 안에는 단 하나의 태그만 넣을 수 있음.
    //방법 1.
        // <div>Hello : div 태그를 root로 잡고 그 안에 또 다른 태그 넣는건 됨
        //     <p>Dayeong</p>
        //     <span>What have you been up to</span>

        // </div>

        <div>
            <h1>{props.name}</h1>
            <h1>Hello Component</h1>
            <p>I love React</p>
            <dib>{props.kbs}</dib>
        </div>
    
    //방법2.
       // <React.Fragment> </React.Fragment>
    ) 
}

export default Hello; //바깥에서 Hello를 사용하겠다.