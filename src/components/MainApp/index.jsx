
import  useTodos  from './useTodos';
import  TodoHeader  from '../TodoHeader';
import  TodoCounter  from '../TodoCounter';
import  TodoSearch  from '../TodoSearch';
import  TodoList  from '../TodoList';
import  TodoItem  from '../TodoItem';
import  TodosError  from '../TodosError';
import  TodosLoading  from '../TodosLoading';
import  EmptyTodos  from '../EmptyTodos';

import  CreateTodoButton  from '../CreateTodoButton';

import  ChangeAlert  from '../ChangeAlert';
import {  useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
  const [trendingMovies , setTrendingMovies] = useState(undefined)
  const navigate = useNavigate()
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    sincronizeTodos,
  } = useTodos();

  
  const goToAddTodo = ()=>{
    navigate('addtodo')
  }

  const editTodo =(id)=>{    
    navigate(`/editodo/${id}`,
    {
      state:{ todo:searchedTodos}
    })
  }
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY =  'bdaaaa2b20c386f0be9d20b50bd8dbe3';
  useEffect(() => {
    const getTrendingMovies = async () => {
        try{
            const endpoint = 'trending/movie/day'
            const res = await fetch(BASE_URL + endpoint + '?api_key=' + API_KEY)
            const data = await res.json()
            const movies = data.results;
            setTrendingMovies(movies)
            console.log('TrendingMovies',movies[0]);
            
        } catch(error) {console.log(error)}
    }
    getTrendingMovies()
        .catch(console.error)
},[]);


  
  return (
    <section className='todoLayout'>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) =><div className='missingReturn'> <p className='missingReturn--text' >No hay resultados para: </p> <p className='missingReturn--err'>{searchText}</p></div>
        }
      >
        {todo => (
          <TodoItem
            key={todo?.id}
            id={todo?.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            editTodo={editTodo}
          />
        )}
      </TodoList>

      <CreateTodoButton
        setOpenModal={goToAddTodo}
      /> 

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </section>
  );
}


