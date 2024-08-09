import React from 'react'
import './Intro.css'
const Hooks = () => {
  return (
    <div>
      <div className='intro'>
        <h1>-:Hooks:-</h1>
        <p>Hooks are reusable functions that provide access to state in React Applications.</p>
        <p>Hooks give access to states for functional components while creating a React application. It allows you to use state and other React features without writing a class.</p>
        <h1>-:useState:-</h1>
        <p>useState is a special function that lets you add state to functional components. It provides a way to declare and manage state variables directly within a function component. It should be noted that one use of useState() can only be used to declare one state variable.</p>
        <h5 style={{color:"white"}}>This hook takes some initial state and returns two value. The first value contains the state and the second value is a function that updates the state. The value passed in useState will be treated as the default value.</h5>
        <h1>-:useEffect:-</h1>
        
        <h1>-:useMemo:-</h1>
      </div>
    </div>
  )
}

export default Hooks
