
 
import { HashRouter, Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainApp from './components/MainApp'
import EditTodo from './pages/EditTodo'
import AddTodo from './pages/AddTodo'


function App() {
  
  return (
   <>
    <HashRouter>
  {/* navbar */}
  {/* create a new feature  */}
      <Routes>
        <Route path='/' element={<MainApp/>}/>
        <Route path='/addtodo' element={<AddTodo/>}/>
        <Route path='/editodo/:id' element={<EditTodo/>}/>
        <Route path='*' element={<p>Paga no found</p>}/>



      </Routes>

    
    </HashRouter>
   </>
  )
}

export default App



