import React, { useState } from "react"; 
//// React aur useState hook ko import kar rahe hain jo state management mein madad karta hai.

const TodoApp = () => { 
//// Ek functional component `TodoApp` define kar rahe hain jo hamara Todo application banayega.

  const [todos, setTodos] = useState([]); 
  //// `todos` ek state variable hai jo sab todos ko array form mein store karega. Initially, yeh empty array hai.
  //// `setTodos` ek function hai jo todos ko update karne ke liye use hoga.

  const [newTodo, setNewTodo] = useState(""); 
  //// `newTodo` ek state variable hai jo input field mein likha gaya naya todo ko store karta hai. Initially, yeh khali string hai.
  //// `setNewTodo` function ka kaam nayi value set karna hai input field ke liye.

  const addTodo = () => { 
  //// Yeh function naya todo add karne ka kaam karta hai.

    if (newTodo.trim() !== "") { 
    //// Agar `newTodo` khali nahi hai (spaces hata kar), tabhi naya todo add hoga.

      setTodos([...todos, { text: newTodo, completed: false }]); 
      //// Purane todos array mein naya todo add kar rahe hain. Spread operator `...todos` se purani list ko copy kar rahe hain.
      //// `text: newTodo` mein text ki value input field se aayegi. `completed: false` initial status hai.

      setNewTodo(""); 
      //// Naya todo add hone ke baad input field ko khali kar diya gaya hai.
    }
  };

  const toggleTodo = (index) => { 
  //// Yeh function kisi specific todo ka `completed` status toggle karega (true se false ya false se true).

    const updatedTodos = todos.map((todo, i) => 
    //// Map function todos array ke har element par chalega.
    
      i === index ? { ...todo, completed: !todo.completed } : todo
    ); 
    //// Agar current index `i` given `index` ke equal hai, to us todo ka completed status reverse (toggle) karenge.
    //// `!todo.completed` true ko false aur false ko true kar deta hai.

    setTodos(updatedTodos); 
    //// Updated todos ko state mein save kar diya jata hai taake UI update ho sake.
  };

  const removeTodo = (index) => { 
  //// Yeh function specific todo ko list se remove karega.

    const updatedTodos = todos.filter((_, i) => i !== index); 
    //// Filter function todos array se wo item hata deta hai jiska index provided index se match karta hai.

    setTodos(updatedTodos); 
    //// Updated list ko state mein set kiya jata hai taake UI update ho jaye.
  };

  const removeAll = () =>{
    setTodos([]); 

  }

  return ( 
  //// Return statement React component ka UI define kar raha hai.

    <div style={{ margin: "0 auto", maxWidth: "400px", textAlign: "center" }}> 
    {/* //// Ek div element jo center aligned hai aur maximum width 400px hai. */}

      <h1>Todo List</h1> 
      {/* //// Heading display kar raha hai. */}

      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Enter a new task" 
      /> 
      {/* //// Input field jisme user naya todo likhega. `onChange` function ke zariye, input ki value ko `newTodo` mein set kar rahe hain. */}

      <button onClick={addTodo} style={{ marginLeft: "10px" }}> 
      {/* //// "Add" button jis par click karne par `addTodo` function chalega. */}

        Add 
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}> 
      {/* //// Todo items ke liye ek unordered list (UL) jisme koi list style nahi hai aur padding 0 hai. */}

        {todos.map((todo, index) => ( 
        //// Todos array ko map kar rahe hain, taake har todo ek list item (LI) ke tor par render ho.

          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none", 
              marginBottom: "10px", 
            }}
          > 
          {/* //// Har todo ke liye ek LI ban raha hai. Agar todo completed hai to text pe line-through hoga, warna simple text. */}
          
            <span onClick={() => toggleTodo(index)}>{todo.text}</span> 
            {/* //// Todo text ko display kar rahe hain. Jab user is text pe click karega to `toggleTodo` function chalega. */}

            <button
              onClick={() => removeTodo(index)} 
              style={{ marginLeft: "10px", color: "red" }} 
            > 
            {/* //// "Remove" button jo removeTodo function ko call karega, aur todo ko list se hata dega. */}

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
//// Component ko export kar rahe hain taake doosri files mein use kiya ja sake.
