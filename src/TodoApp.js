import React, { useState } from "react"; 

const TodoApp = () => { 
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 

  const addTodo = () => { 
    if (newTodo.trim() !== "") { 
      setTodos([...todos, { text: newTodo, completed: false }]); 
      setNewTodo(""); 
    }
  };

  const toggleTodo = (index) => { 
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ); 
    setTodos(updatedTodos); 
  };

  const removeTodo = (index) => { 
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos); 
  };

  const removeAll = () => {
    setTodos([]); 
  };

  return ( 
    <div style={{ margin: "0 auto", maxWidth: "400px", textAlign: "center" }}> 
      <h1>Todo List</h1> 
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Enter a new task" 
      /> 
      <button onClick={addTodo} style={{ marginLeft: "10px" }}> 
        Add 
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}> 
        {todos.map((todo, index) => ( 
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none", 
              marginBottom: "10px", 
            }}
          > 
            <span onClick={() => toggleTodo(index)}>{todo.text}</span> 
            <button
              onClick={() => removeTodo(index)} 
              style={{ marginLeft: "10px", color: "red" }} 
            > 
              Remove 
            </button>
          </li>
        ))}
      </ul>
      {todos.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </div>
  );
};

export default TodoApp;
