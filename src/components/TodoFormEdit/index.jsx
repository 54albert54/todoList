import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoFormEdit({ edditTodo ,todoInfo }) {
  const [newTodoValue, setNewTodoValue] = useState(todoInfo?.text);
  const navigate = useNavigate()

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    
    navigate(-1)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    edditTodo(newTodoValue , todoInfo.id);
   
    navigate(-1)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Edita el TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Editar
        </button>
      </div>
    </form>
  );
}