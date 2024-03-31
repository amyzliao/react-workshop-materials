import './App.css';
import React, { useState, useEffect } from "react";
import { defaultTodoList } from './fake_backend/default';

const TodoItem = ({ index, todoText, deleteTodo }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '8fr 1fr',
      gap: "10px",
      backgroundColor: "rgb(222, 222, 222)",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      marginBottom: "20px",
      boxSizing: "border-box",
      width: "400px",
      minHeight: "40px",
      paddingLeft: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "10px",
    }}>
      <div style={{
        textAlign: "left",
        alignContent: "center",
        width: "100%",
      }}>
        {todoText}
      </div>
      <button style={{
        border: "none",
        backgroundColor: "transparent",
        fontSize: "20px",
        color: "red"
      }}
        onClick={(e) => deleteTodo(index)}
      >
        X
      </button>
    </div >
  )
}

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoItem key={index} index={index} todoText={todo} deleteTodo={deleteTodo} />
      })}
    </div>
  )
}

const AddForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    addNewTodo(newTodo);
    setNewTodo("");
  }

  return (
    <div style={{
      width: "400px",
      marginLeft: "auto",
      marginRight: "auto",
      display: 'grid',
      gridTemplateColumns: '4fr 1fr',
      gap: "10px",
    }}>
      <input
        style={{
          borderRadius: "10px",
          border: "0.1rem solid rgb(204, 145, 154)",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "15px",
          backgroundColor: "rgb(255, 226, 230)",
          padding: "10px"
        }}
        placeholder="add a todo item"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button style={{
        backgroundColor: "lightpink",
        border: "0.1rem solid rgb(204, 145, 154)",
        borderRadius: "10px",
        fontSize: "15px",
      }}
        onClick={(e) => handleAdd()}>add</button>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState(defaultTodoList);

  useEffect(() => {
    console.log("only on initial render");
  }, []);

  useEffect(() => {
    console.log("todos updated", todos);
  }, [todos]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div style={{
        backgroundColor: "lightblue",
        marginLeft: "auto",
        marginRight: "auto",
        width: "500px",
        paddingBottom: "40px",
        borderRadius: "20px",
      }}>
        <h1 style={{
          paddingTop: "20px",
        }}>todo list</h1>
        <div style={{
          marginBottom: "30px",
        }}>
          <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </div>
        <AddForm addNewTodo={addNewTodo} />
      </div>
    </div>
  );
}

export default App;
