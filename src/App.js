import React,{useState} from 'react';
import './App.css';

function App() {

  const [input,setInput]= useState('');
  const [result,setResult]= useState('');

  const calculate = ()=>{

    let k = Function("return "+ input)();
    setResult(k);
    setInput(k);
  }


  const sqrt = ()=>{
    alert('Sqrt is temporarily unavailble');
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Calculator</h1>
      </div>

      <div className="f-container">
        <div className="container">
            <div className="inputbox">
              <input type="text" value={input} disabled={true} onChange={(event)=>{
                setInput(event.target.value);
              }}></input>
            </div>

            <div>
              <button onClick={()=>{setInput(''); setResult('')}}>Clear</button>
              <button onClick={()=>{setInput(input.slice(0,input.length-1))}}>Back</button>
              <button onClick={sqrt}>Sqrt</button>
              <button onClick={()=>{setInput(input+'/')}}>div</button>
              <button onClick={()=>{setInput(input+'9')}}>9</button>
              <button onClick={()=>{setInput(input+'8')}}>8</button>
              <button onClick={()=>{setInput(input+'7')}}>7</button>
              <button onClick={()=>{setInput(input+'*')}}>*</button>
              <button onClick={()=>{setInput(input+'6')}}>6</button>
              <button onClick={()=>{setInput(input+'5')}}>5</button>
              <button onClick={()=>{setInput(input+'4')}}>4</button>
              <button onClick={()=>{setInput(input+'-')}}>-</button>
              <button onClick={()=>{setInput(input+'3')}}>3</button>
              <button onClick={()=>{setInput(input+'2')}}>2</button>
              <button onClick={()=>{setInput(input+'1')}}>1</button>
              <button onClick={()=>{setInput(input+'+')}}>+</button>
              <button onClick={()=>{setInput(input+'0')}}>0</button>
              <button onClick={()=>{setInput(input+'00')}}>00</button>
              <button onClick={()=>{setInput(input+'.')}}>.</button>
  
              <button onClick={calculate}>=</button>
              
            </div>
             {/* <h1>Result:</h1> {result} */}
        </div>
      </div>

    </div>
  );
}

export default App;
