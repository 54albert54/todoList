import React from 'react';
import  TodoIcon  from '.';

export default function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}


