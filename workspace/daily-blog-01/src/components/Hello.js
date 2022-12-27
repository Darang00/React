//function Hello({str, kbs,hi}) {
    function Hello(props) {
    return(
       <div>
        <h1>{props.str}</h1>
        <h1> Hello Component</h1>
        <span>리액트 재미있어요!!</span>
        <div>{props.kbs}</div>
        <h2>{props.hi}</h2>
       </div>
    )
}

export default Hello;