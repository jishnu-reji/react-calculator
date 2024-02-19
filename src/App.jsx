import { useState } from 'react'
import './App.css'


function App() {

  const[inp,setInp]=useState('')
  const handleClick = (value) =>{
    setInp(inp+value)
    console.log(value);
  }
  const handleClear = () =>{
    setInp('')
  }
  const result = () =>{
    console.log(eval(inp));
    setInp(eval(inp))
  }
  const removel = () =>{
    setInp(inp.slice(0,-1))
    
  }
  return (
    <div style={{width:'100%'}} className='bg-dark'>
      <div style={{height:'100vh'}} className="container d-flex flex-column justify-content-center align-items-center text-white">
        <h1>CALCULATOR</h1>
        <div className="calc border shadow rounded p-2 d-flex flex-column justify-content-between">
          <input value={inp} type="text" className='form-control mb-3' />
          <div className='d-flex justify-content-between'>
            <button className='lb' onClick={()=>handleClear()}>AC</button>
            <button className='bb' onClick={()=>removel()}>C</button>
            <button className='bb' onClick={()=>handleClick('/')}>/</button>
          </div>
          <div className='d-flex justify-content-between'>
            <button  onClick={()=>handleClick('7')}>7</button>
            <button  onClick={()=>handleClick('8')}>8</button>
            <button  onClick={()=>handleClick('9')}>9</button>
            <button className='bb' onClick={()=>handleClick('*')}>*</button>
          </div>
          <div className='d-flex justify-content-between'>
            <button  onClick={()=>handleClick('4')}>4</button>
            <button  onClick={()=>handleClick('5')}>5</button>
            <button  onClick={()=>handleClick('6')}>6</button>
            <button className='bb' onClick={()=>handleClick('-')}>-</button>
          </div>
          <div className='d-flex justify-content-between'>
            <button  onClick={()=>handleClick('1')}>1</button>
            <button  onClick={()=>handleClick('2')}>2</button>
            <button  onClick={()=>handleClick('3')}>3</button>
            <button className='bb' onClick={()=>handleClick('+')}>+</button>
          </div>
          <div className='d-flex justify-content-between'>
            <button  onClick={()=>handleClick('.')}>.</button>
            <button  onClick={()=>handleClick('0')}>0</button>
            <button className='lb' onClick={()=>result()}>=</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
