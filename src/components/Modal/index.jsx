import React from 'react';

import './Modal.css';

export default function Modal({ children }) {
  return (
    <div className="ModalBackground">
      
      {children}
    </div>
  
  )
}


