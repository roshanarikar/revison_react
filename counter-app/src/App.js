import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount] = useState(0);
  return (
    <div className="App">
       <div style={{"border":"1px solid black","width":"50%","margin":"auto","background":"grey","paddingBottom":"20px"}}>
        <h1>Counter App</h1>       
        <h1>{count}</h1>
        <button style={{"width":"50px","height":"30px","fontSize":"10px"}} onClick={()=> setCount(0) }>Reset</button>
        <div>
        <button style={{"width":"50px","height":"50px","fontSize":"30px"}} onClick={()=> setCount(count-1)}>-</button>
        <button style={{"width":"50px","height":"50px","fontSize":"30px"}} onClick={()=> setCount(count+1)}>+</button>
        </div>
       </div>
    </div>
  );
}

export default App;
