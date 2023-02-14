 import React from 'react'
 import { Link } from 'react-router-dom'
 import './Nav.css'
 const Nava = () => {
   return (
     <div className='nav'>
     <h2>Logo</h2>
     <div className='navbar'>
     <Link className='lis' to='/'>Home</Link>
     <Link className='lis'to='/about'>About</Link>
     <Link className='lis'to='/contact'>Contact</Link>
     </div>
     </div>
        
   )
}

export default Nava
