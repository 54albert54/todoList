import { useEffect, useState } from "react";
import useTodos from "../../components/MainApp/useTodos";
import Modal from "../../components/Modal"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MyLoader from "../../UI/Skeleton";
import TodoFormEdit from "../../components/TodoFormEdit";

const  EditTodo = ()=>{
  const idTodo = useParams().id
  const location = useLocation()

  
  
  const [hasData , setHasData] = useState(false)
  const [todoInfo , setTodoInfo] = useState(undefined)
  const {
    
    edditTodo,
    searchedTodos
  } = useTodos();
  
 
  useEffect(()=>{
    if(location.state?.todo){
      setHasData(true)
      const oldData = location.state?.todo.find(todo => todo.id == idTodo);
      setTodoInfo(oldData)
    }
    if (searchedTodos[0]?.id != undefined){
      setHasData(true)
      const oldData = searchedTodos.find(todo => todo.id == idTodo);
      setTodoInfo(oldData)

      
    }
    
    
  },[searchedTodos])

 

  
  return(
    <>
    <Modal>
    {
      hasData?<TodoFormEdit edditTodo={edditTodo} todoInfo={todoInfo}/>
      :<MyLoader style={{bagroundColor:'white'}}/>
    }
    </Modal>
      
    </>
  )
}

export default EditTodo




