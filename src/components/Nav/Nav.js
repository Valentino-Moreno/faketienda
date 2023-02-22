 import React from 'react'
 import { Link } from 'react-router-dom'
 import './Nav.css'
 const Nava = () => {
   return (
     <div className='nav'>
     <h2>Logo</h2>
     <div className='navbar'>
     <Link className='lis' to='/'>Home</Link>
     <Link className='lis'to='/Category1'>Electronics</Link>
     <Link className='lis'to='/Category2'>Jewelery</Link>
     <Link className='lis'to='/Category3'>Men's clothing</Link>
     <Link className='lis'to='/Category4'>Women's clothing</Link>
     </div>
     </div>
        
   )
}

export default Nava
