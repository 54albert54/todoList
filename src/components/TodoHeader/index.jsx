import React, { Children, cloneElement } from 'react';
import './style.css'
export default function TodoHeader({ children, loading }) {
  
  
  
  return (
    <header className='TodoHeader' >
      {
        Children.toArray(children)
        .map(child => cloneElement(child , {loading}))
        
      }
    </header>
  );
}


