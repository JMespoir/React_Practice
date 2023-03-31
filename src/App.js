import { useState, Fragment,useRef } from "react";

const App=()=>{
  const [num1,setNum1] = useState(Math.floor(Math.random()*9)+1);
  const [num2,setNum2] = useState(Math.floor(Math.random()*9)+1);
  const [value,setValue] = useState("");
  const [cor,setCor] = useState(true);
  const Input = useRef()
  const [A,setA] = useState("");
  const [visiable,setVisiable]=useState(false);


  const OnChange=(e)=>{
    setValue(e.target.value)
  }
  const OnSubmit=(e)=>{
    setVisiable(true);
    e.preventDefault();
    setA(num1*num2);

    if(num1*num2 === parseInt(value)){
      setValue("");
      setCor(true);
    }
    else{
      setValue("");
      setCor(false);
    }
    setNum1(Math.floor(Math.random()*9)+1);
    setNum2(Math.floor(Math.random()*9)+1);
    Input.current.focus();
  }
  
  return(
    <Fragment>
      <span>{`${num1} * ${num2} 는?`}</span>
      <form onSubmit={OnSubmit}>
        <input ref={Input} onChange={OnChange} value={value}></input>
        <button type="submit" >Submit!!</button>
      </form>
      {visiable ? <div>{cor ?`정답!! (${A})`: `오답!! 정답은 : (${A})`}</div> : null}
      
    </Fragment>
  );
}
export default App;