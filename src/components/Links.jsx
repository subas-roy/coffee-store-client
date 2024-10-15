import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <div className='my-4'>
      <ul className='flex gap-2 justify-center'>
        <li><NavLink className="btn btn-link" to={'/'}>Home</NavLink></li>
        <li><NavLink className="btn btn-link" to={'/addCoffee'}>Add New Coffee</NavLink></li>
        <li><NavLink className="btn btn-link" to={'/user'}>Users</NavLink></li>
        <li><NavLink className="btn btn-link" to={'/signup'}>Sign Up</NavLink></li>
        <li><NavLink className="btn btn-link" to={'/signin'}>Sign In</NavLink></li>
      </ul>
  </div>
  );
};

export default Links;