import React from 'react'
import './Question.css'
// import './Que.css'
// import PrismExample from './PrismExample'
const Question = () => {   
  const code='Code Example = let a=10 , var a=11 , const pi=3.14'               
  return (
    <div>
      <div className='ques'>
        <h2>-:JavaScript:-</h2>
        <h5>Que1:-What is JavaScript, and where is it used?</h5>
        <p>Ans:JavaScript is a versatile, high-level programming language primarily used for creating and enhancing web pages. It enables interactive features on websites, such as dynamic content updates, form validation, animations, and complex user interfaces.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que2:-How do you declare a variable in JavaScript?</h5>
        <p>Ans:In JavaScript, you can declare a variable using the var, let, or const keywords</p>
        {/* <div>
        <PrismExample code={code} language="javascript"/>
        </div>
        <hr style={{color:"grey"}}></hr> */}

        <h5>Que3:-What are the different data types in JavaScript?</h5>
        <p>Ans:In JavaScript, data types are categorized into two main groups: primitive data types and non-primitive data types.
        <br></br>
        <h5>primitive DataTypes:-<p>Number,String,Boolean,Null,Undefined.</p></h5>
        <h5>non-primitive DataTypes:-<p>Object,Array,Function</p></h5>
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que4:-Explain the difference between let, const, and var.</h5>
        <p>Ans:In JavaScript, let, const, and var are used for variable declaration, but they have different behaviors and use cases. 
        <h5>var:-<p>Global Scope,You can re-declare variables using "var". </p></h5>
        <h5>let:-<p>Block-scoped. This means a variable declared with let is only available within the nearest enclosing block.You cannot re-declare a variable with let within the same block scope.</p></h5>
        <h5>const:-<p>Block-scoped,You cannot re-declare a variable with const within the same block scope.const is used to declare variables that are meant to be constant values, i.e., their values cannot be reassigned after the initial assignment.</p></h5>
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que5:-How do you create a function in JavaScript?</h5>
        <p>Ans:</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que6:-What is the purpose of the return statement in a function?</h5>
        <p>Ans:The purpose of the return statement in a function is to terminate the function and optionally send a value back to the function's caller. When a return statement is executed, the function stops its execution at that point and returns the specified value, if any, to the part of the code that called the function. If no value is specified, the function returns None by default.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que7:-How do you call a function?</h5>
        <p>Ans:</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que8:-What are objects in JavaScript, and how do you define them?</h5>
        <p>Ans:In JavaScript, objects are fundamental data structures used to store collections of data and more complex entities. They are key-value pairs where keys are strings (or Symbols) and values can be any data type (including other objects, functions, or primitive values).</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que9:-How do you access and modify object properties?</h5>
        <p>Ans:In JavaScript, you can access and modify object properties using dot notation (.) or bracket notation ([]).</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que10:-What is the difference between == and ===?</h5>
        <p>Ans:<h5>Equality operator:-<p>The == operator compares two values for equality, but it performs type conversion if the values being compared are of different types. This means that it will attempt to convert the values to a common type before making the comparison.
        </p></h5>
        <h5>Strict Equality Operator<p>The === operator compares two values for equality without performing any type conversion. The values must be of the same type and also hold the same value to be considered equal.</p></h5>
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que11:-How do you handle errors in JavaScript?
        </h5>
        <p>Ans:The <span style={{color:"red"}}>try</span> statement defines a code block to run (to try).
        The <span style={{color:"red"}}>catch</span> statement defines a code block to handle any error.
        The <span style={{color:"red"}}>finally</span> statement defines a code block to run regardless of the result.
        The <span style={{color:"red"}}>throw </span>statement defines a custom error.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que12:-What is a callback function?</h5>
        <p>Ans:A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or the completion of a task.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que13:-What is the DOM?</h5>
        <p>Ans:DOM refers to Document Object Model
          With the HTML DOM, JavaScript can access and change all the elements of an HTML document.DOM is like the herarical model of the object.The HTML DOM model is constructed as a tree of Objects:DOM is a platform that allows programs and scripts to dynamically access and update the content, structure, and style of a document.The HTML DOM is a standard for how to access, change, add, or delete HTML elements.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que14:-How do you access an element in JavaScript</h5>
        <p>Ans:Accessing elements in JavaScript typically refers to accessing elements in the Document Object Model (DOM), which represents the structure of a web page.
        <ul>
          <li>Using getElementById:</li>
          <li>Using getElementsByClassName:</li>
          <li>Using getElementsByTagName:</li>
          <li>Using querySelector:</li>
          <li>Using querySelectorAll:</li>
        </ul>
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que15:-How do you change the content of an HTML element?</h5>
        <p>Ans:To change the content of an HTML element using JavaScript, you typically manipulate the <span style={{color:"red"}}>innerHTML </span>property of the element.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que16:-What is JSON, and how is it used in JavaScript?</h5>
        <p>Ans:JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language, but JSON is language-independent and is widely used in various programming environments beyond just JavaScript.JSON is commonly used for data exchange between a server and web applications. It's also used for configuration files, APIs, and storing complex data structures locally</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que17:-How do you convert a JSON string to a JavaScript object?</h5>
        <p>Ans:To convert a JSON string to a JavaScript object, you can use the JSON.parse() method in JavaScript.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que18:-What is the purpose of setTimeout and setInterval?</h5>
        <p>Ans:<span style={{color:"red"}}>setTimeout: </span> This function is used to execute a specified block of code once after a specified time interval. It takes two parameters:A function or code snippet to execute.
        The time (in milliseconds) after which to execute the code
        <br></br>
        <span style={{color:"red"}}>setInterval: </span>This function is used to repeatedly execute a specified block of code at a fixed time interval. It takes two parameters:A function or code snippet to execute.
        The time interval (in milliseconds) between each execution
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que19:-What is a promise in JavaScript?</h5>
        <p>Ans:In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation, and its resulting value. It allows you to handle asynchronous operations more easily by providing a cleaner syntax compared to traditional callback-based approaches.Promises have three states:<span style={{color:"red"}}>Pending,Fullfilled,Rejected.</span>
        Promises have methods like then() and catch() that allow you to handle the asynchronous results:

</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que20:-What are template literals, and how do you use them?</h5>
        <p>Ans:Template literals are a feature in JavaScript that allow for easier and more readable string interpolation and multiline strings. They are denoted by backticks (`) instead of single or double quotes.ou can embed expressions inside ${} within a template literal. </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que21:-How do you handle asynchronous operations with async and await?</h5>
        <p>Ans:This async keyword means that the function will return a JavaScript Promise that will run as asynchronously. This is the syntax on how you can create an async function. While async function ensures that the function returns a Promise, the await keyword wait until a declared Promise is finished and returns a result</p>
        <hr style={{color:"grey"}}></hr>

        <h2>-:ReactJs-</h2>
        <h5>Que1:-What is ReactJS?</h5>
        <p>Ans:React,referred to as a frontend JavaScript framework.It is a JavaScript library created by Facebook. React is a tool for building UI components.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que2:What are the main features of ReactJS?</h5>
        <p>Ans:React is Fast,Single page application,Component Based,Update data on UI without refreshing the page,Reusability,Provide Virtual DOM</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que3:-How does react works?</h5>
        <p>Ans:React creates a VIRTUAL DOM in memory.Instead of manipulating the Real DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the Real DOM.React only changes what needs to be changed!</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que4:-What is the virtual DOM?</h5>
        <p>Ans:React uses Virtual DOM which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.
        So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que5:-What is NodeJs?</h5>
        <p>Ans:Node.js is an open source server environment.
        Without using Browser Node.js allows you to run JavaScript on the server.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que6:-What is V8 engine?</h5>
        <p>Ans:V8 is the name of the JavaScript engine that powers Google Chrome.It's the thing that takes our JavaScript and executes it while browsing with Chrome.V8 is the JavaScript engine i.e. it parses and executes JavaScript code.
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que7:-What are npm packages</h5>
        <p>Ans:npm stands for node package manager.NPM is a package manager for Node.js packages, or modules if you like.A package in Node.js contains all the files you need for a module.Modules are JavaScript libraries you can include in your project.All npm packages are defined in files called package.json.The content of package.json must be written in JSON.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que8:-What are Components?</h5>
        <p>Ans:Components are like functions that return HTML elements.There are two types of Components:-Class Components and Functional Components</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que9:-What is LifeCycle of components</h5>
        <p>Ans:The three phases are:<h5>Mounting:-</h5><p>Mounting means putting elements into the DOM</p>
        <h5>Updating</h5><p>The next phase in the lifecycle is when a component is updated.</p>
        <h5>Unmounting</h5>
        <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p>
        </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que10:-What is Routing</h5>
        <p>Ans:Conditional Rendering of the Components on the basis of URL(Uniform Resourses Locator)</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que11:-What is Router and Routes?</h5>
        <p>Ans:<h5>Router</h5> component is what makes the connection between browser location and the react application. It doesn't render anything visible on your page.<h5>Route</h5> is much simple to explain. It just renders some UI when a location matches the route’s path. </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que12:-What is JSX?</h5>
        <p>Ans:JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React, a JavaScript library for building user interfaces. JSX allows you to write HTML elements within JavaScript code, making it easier to create and visualize the structure of the UI.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que13:-What are React hooks?</h5>
        <p>Ans:Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que14:-What is the use of the useState hook?</h5>
        <p>Ans:The useState hook in React is a fundamental part of its functional component API. It allows you to add state management to functional components.</p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que15:-What are props in react?</h5>
        <p>Ans:React, "props" (short for "properties") are a mechanism for passing data from a parent component to a child component. They are read-only, meaning that a child component cannot modify them. </p>
        <hr style={{color:"grey"}}></hr>

        <h5>Que16:-What is the purpose of the render() method in a React component?</h5>
        <p>Ans:The render() method in a React component is a crucial part of how React works. Its primary purpose is to describe what the UI should look like for that particular component.</p>
        <hr style={{color:"grey"}}></hr>
      </div>
    </div>
  )
}

export default Question
