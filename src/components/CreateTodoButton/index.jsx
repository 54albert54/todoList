
import './CreateTodoButton.css';

export default function CreateTodoButton({setOpenModal}) {
  const onClickButton = () => {

  
    
    setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}


