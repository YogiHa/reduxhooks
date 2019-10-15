import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import Todo from './components/Todo/Todo';
import './App.css';

function App() {
    const data = useSelector(state => state);
    return (
        <div className="App">
        <Header />
          <br/>
          {
          	data.map((todo,index) => (
          		<Todo
          		  todo={todo.content}
                isCompleted={todo.isCompleted}
          		  key={index}
          		  index={index}
          		  />
          		))
          }
        <CreateTodo />
        </div>
    );
}

export default App;