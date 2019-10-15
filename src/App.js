import React from 'react';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import './App.css';

function App() {
    return (
        <div className="App">
        <Header />
          <br/>
        <CreateTodo />
        </div>
    );
}

export default App;