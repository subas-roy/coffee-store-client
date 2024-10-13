import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <div className='my-4'>
      <ul className='flex gap-4 justify-center'>
        <li><NavLink className="btn btn-link" to={'/'}>Home</NavLink></li>
        <li><NavLink className="btn btn-link" to={'/addCoffee'}>Add New Coffee</NavLink></li>
      </ul>
  </div>
  );
};

export default Links;