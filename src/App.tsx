import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoSlice, { ITodoItem } from './features/todo/todoSlice';
import TodoList from './app/Todolist/TodoList';
import './App.css'

function App() {
  const todo = useSelector((state) => state.Todo); 
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [update, setUpdate] = useState('');
 
  const handleSubmit = () => {
    dispatch(
      TodoSlice.actions.add({
        id: todo.data, 
        name: task,
        isCompleted: false,
      })
    );
    setTask(''); 
  };

  const handleEdit = (id: number, newName: string) => {
    dispatch(
      TodoSlice.actions.edit({
        id: id,
        name: newName,
      })
    );
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className='container'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
     

      {todo.data.map((task: ITodoItem) => (
        <TodoList
          key={task.id}
          data={task}
          deleteTask={(id) => {
            dispatch(TodoSlice.actions.delete(id));
          }}
          edit={handleEdit}
        />
      ))}
    </>
  );
}

export default App;
