import { useState } from 'react'
import "./CSS/App.css"

function App() {
  const [show,setBtn]=useState(true)
  return (
    <div className="App">
      <div className='Btns'> 
       <button className='show' onClick={()=>setBtn(true)} >Show</button>
     <button className='hide' onClick={()=>setBtn(false)} >Hide</button>
</div>
     {
       show?<p className='txt'> This is text</p>:null
     }
    
    </div>
  );
}

export default App
