import React from 'react'
import './Intro.css'
const Intro = () => {
  return (
    <div>
      <div className='intro'>
            <h1>-:React Js:-</h1>
            <p>React,referred to as a frontend JavaScript framework.It is a JavaScript library created by Facebook.
            React is a tool for building UI components.</p>
            <hr style={{color:"gray"}}></hr>
            <h1>-:Features:-</h1>
            <ul>
                <li>React is Fast</li>
                <li>Single page application</li>
                <li>Component Based</li>
                <li>Update data on UI without refreshing the page</li>
                <li>Reusability</li>
                <li>Provide Virtual DOM</li>
            </ul>
            <hr></hr>
            <h1>-:How does React Work?:-</h1>
            <p>React creates a VIRTUAL DOM in memory.
            <br></br>
            Instead of manipulating the Real DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the Real DOM.
            <br></br>
            React only changes what needs to be changed!
            </p>
        </div>
    </div>
  )
}

export default Intro
