import React from 'react'
import './Intro.css'
const NodeJs = () => {
  return (
    <div>
      <div className='intro'>
          <h1>-:V8 Engine:-</h1>
          <p>V8 is the name of the JavaScript engine that powers Google Chrome. 
          <br></br>It's the thing that takes our JavaScript and executes it while browsing with Chrome.
          <br></br>
          V8 is the JavaScript engine i.e. it parses and executes JavaScript code.
          </p>
          <hr></hr>
          <h1>-:Node Js:-</h1>
          <p>Node.js is an open source server environment.
          <br></br>
          Without using Browser Node.js allows you to run JavaScript on the server.
          </p>
          <hr></hr>
          <h1>-:npm packages:-</h1>
          <p>npm stands for <span>node package manager
          </span>
          <br></br>
          NPM is a package manager for Node.js packages, or modules if you like.
          <br></br>
          A package in Node.js contains all the files you need for a module.
          <br></br>
          Modules are JavaScript libraries you can include in your project.
          <br></br>
          All npm packages are defined in files called package.json.
          <br></br>
          The content of package.json must be written in JSON.  
          </p>
          </div>
    </div>
  )
}

export default NodeJs
