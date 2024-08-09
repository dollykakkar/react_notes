import React from 'react'
import './Intro.css'
const CallBackHell = () => {
  return (
    <div>
      <div className='intro'>
        <h1>Callback</h1>
        <p>A callback is a function passed as an argument to another function, which gets invoked after the main function completes its execution. You pass the callback function to the main function as an argument, and once the main function finishes its task, it calls the callback function to deliver a result.</p>
        <h1>-:Callback Hell:-</h1>
        <p>Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.</p>
      </div>
    </div>
  )
}

export default CallBackHell
