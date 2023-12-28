import { useRef, useState } from 'react'




function App() {
 
  const useRefHook=useRef();
  function handleInput(){
   useRefHook.current.focus()
   useRefHook.current.style.backgroundColor="red"
   useRefHook.current.style.color="white"
   useRefHook.current.value="1000"


  }

  return (
    <>
    <h2>Use Ref hook</h2>
      <input type="text" ref={useRefHook}/>
      <button onClick={()=>handleInput()}>handle input</button>
      
    </>
  )
}

export default App
