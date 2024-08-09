import React from 'react'
import './Intro.css'
const Dom = () => {
  return (
    <div>
        <div className='intro'>
            <h1>-:DOM:-</h1>
            <p>DOM refers to Document Object Model
            <br></br>
            With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
            <br></br>
            DOM is like the herarical model of the object.The HTML DOM model is constructed as a tree of Objects:
            <br></br>
            DOM is a platform that allows programs and scripts to dynamically access and update the content, structure, and style of a document.
            <br></br>
            The HTML DOM is a standard for how to access, change, add, or delete HTML elements.
            </p>
            <hr></hr>
            <h1>-:Virtual DOM:-</h1>
            <p>React uses Virtual DOM which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.
            <br></br>
            So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 
            </p>
      </div>
    </div>
  )
}

export default Dom
