import React from 'react'
import './Routing.css'
const Routing = () => {
  return (
    <div>
      <div className='div6'>
        <h1>Routing</h1>
        <p>Conditional Rendering of the Components on the basis of URL in React is a technique
        where different components are rendered based on the URL or route that the user is
        currently on. This allows for dynamic content display and navigation within a
        single-page application. By using React Router, specific components can be conditionally
        rendered based on the URL path, providing a seamless user experience and enhancing the
        functionality of the application. */
        Conditional Rendering of the Components on the basis of URL(Uniform Resourses Locator)</p>
        <hr></hr>
        <h1>ReactJs Router</h1>
        <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
        <hr></hr>
        <h1>Set Up to use React Router</h1>
        <p>
            <span style={{color:"red"}}>Step1:-</span>Install react-router in your application write the following command in your terminal<br></br><span style={{color:"red"}}>(npm i react-router-dom)</span>
        </p>
        <p><span style={{color:"red"}}>Step2:-</span>Importing React Router <span style={{color:"red"}}>(import[BrowserRouter as Routrer, Routes, Route] from "react-router-dom";)</span></p>
        <p>The updated dependencies in package.json file.</p>
    </div>
    </div>
  )
}

export default Routing
