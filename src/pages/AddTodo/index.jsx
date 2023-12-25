import CreateTodoButton from "../../components/CreateTodoButton"
import useTodos from "../../components/MainApp/useTodos";
import Modal from "../../components/Modal"
import TodoForm from "../../components/TodoForm"

 const AddTodo=()=>{
  const {
    addTodo,
    setOpenModal,
  
  } = useTodos();
  return(
    <>
     
     
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      

      {/* <CreateTodoButton
        setOpenModal={setOpenModal}
      /> */}
    </>
  )
}

export default AddTodo