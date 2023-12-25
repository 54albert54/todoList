import React from 'react';

import './TodoIcon.css';
import { MdCancel } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";


const IconTypes = {
  "check": color => (
    <MdFileDownloadDone className="Icon-svg Icon-svg--check" />
     ),
  "delete": color => (
    <MdCancel className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

export default function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      
      {IconTypes[type](color)}
    </span>
  );
}
