import React from 'react'
import './Barrr.css'
import { Link } from 'react-router-dom'
const Barrr = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
            <i class="fa-brands fa-react"></i>
            <p>React</p>
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <i class="fa-solid fa-house i1"></i>
                    <Link class="nav-link" to='/Home'>Home</Link>
                </li>
                <li>
                    <i class="fa-solid fa-person-chalkboard"></i>
                    <Link class="nav-link" to='/Intro'>Introduction</Link>
                </li>
                <li>
                    <i class="fa-regular fa-object-group"></i>
                    <Link class="nav-link" to='/Dom'>Virtual DOM</Link>
                </li>
                <li>
                    <i class="fa-solid fa-share-nodes"></i>
                    <Link class="nav-link" to='/Node'>NodeJs</Link>
                </li>
                <li>
                    <i class="fa-brands fa-github"></i>
                    <Link class="nav-link" to='/Git'>GitHub</Link>
                </li>
                <li>
                    <i class="fa-solid fa-person-circle-question"></i>
                    <Link class="nav-link" to='Question'>Question</Link>
                </li>
                <li>
                    <i class="fa-solid fa-clipboard-list"></i>
                    <Link class="nav-link" to='/others'>Others</Link>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Barrr
