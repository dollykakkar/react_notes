import React from 'react'
import './Others.css'
import {Link} from 'react-router-dom'
const Others = () => {
  return (
    <div>
      <div className='other'>
        <ul>
            <li> <Link to='/routing'>Routing</Link></li>
            <li><Link to='/component'>Components</Link></li>
            <li><Link to='/hooks'>Hooks</Link></li>
            <li><Link to='/props'>Props</Link></li>
            <li><Link to='/callback'>Callback Hell</Link></li>
            <li><Link to='/drilling'>Props Drilling</Link></li>
        </ul>
      </div>
    </div>
  )
}
export default Others
