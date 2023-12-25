import { FaEdit } from "react-icons/fa";
import  CompleteIcon  from '../TodoIcon/CompleteIcon';
import  DeleteIcon  from '../TodoIcon/DeleteIcon';
import './TodoItem.css';


export default function TodoItem(props ) {
  

  
  
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p>{props?.id}</p>
      
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props?.text}
      </p>
      {!props.completed && <FaEdit  color="blue" className="eddit-icon" onClick={()=>props.editTodo(props?.id)}/>}
      <DeleteIcon
        onDelete={props?.onDelete}
      />
    </li>
  );
}


