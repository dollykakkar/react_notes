import React from 'react'
import './Intro.css'
const Component = () => {
  return (
    <div>
        <div className='intro'>
            <h1>React Components</h1>
            <p>Components are like functions that return HTML elements.
            <br></br>
            Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
            <br></br>
            </p>
            <hr></hr>
            <h2>There are two types of Components:-</h2>
            <ul>
                <li>Class Components</li>
                <li>Functional Components</li>
            </ul>
            <p className='h2'>Class Components:-</p>
            <p>Class Components are the reusable code blocks or classes that extends the React.Component
            <br></br>
            These components are simple classes.and are based on the traditional class-based approach. All class components are child classes for the Class Component of ReactJS.
            <br></br>
            React Class Components are JavaScript classes that <span>extend React.Component.</span>
            </p>
            <p className='h2'>Function Components:-</p>
            <p>Functional Component is one way to create components in a React Application. React.js Functional Components helps to create UI components in a Functional way. <br></br>
            These are simply JavaScript functions. We can create a functional component in React by writing a JavaScript function.
            </p>
            <hr></hr>
           <h1>LifeCycle of Components</h1>
           <p>The three phases are: <span>Mounting, Updating, and Unmounting.</span></p>
           <h3>Mounting:-</h3>
           <p>Mounting means putting elements into the DOM</p>
           <h3>Updating:-</h3>
           <p>The next phase in the lifecycle is when a component is updated.
          <br></br>
          A component is updated whenever there is a change in the components</p>
          <h3>Unmounting</h3>
          <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
      </div>
      
    </div>
  )
}

export default Component
