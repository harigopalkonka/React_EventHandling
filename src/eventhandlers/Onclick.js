import React from 'react'


function displayMessage() {
    return (
  
      // console.log("This Is button click Trigger Event !!!!"),
  
      alert("This Is button click Trigger Event !!!!")
  
      
    )
  }
  
  function displayMessage1(num) {
    return (
      alert(num)
    )
  }
  
  function displayMessage2(num,event) {
    return (
      alert(num),
      console.log(event),
      console.log(event.target),
      console.dir(event.target),
      console.log(event.target.value)
    )
  }
  
  function displayMessage3(num,event) {
    return (
      alert(num),
      console.log(event),
      console.dir(event.target)
    )
  }
  

const Onclick = () => {
  return (
    <div>
    <h1>onClick Event Handler Method</h1>

    <button onClick={displayMessage}>Click</button>  

    <button onClick={() => { alert("this is arrow function using alert !!!")}}>Arrow Click</button>  

    <button onClick={ () => {displayMessage1(5)}}>ClickWithInput</button>

    <button onClick={ (event) => {displayMessage2(10,event)}}>ClickWithInput</button>    
  
    <input type="text" onKeyUp={(event) => {displayMessage3(15,event)}} />

    </div>
  )
}

export default Onclick
