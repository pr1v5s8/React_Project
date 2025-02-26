// import { useState } from "react";

// export default function TodoList(){
//     let [todos, setTodos] = useState([]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = () => {
//         setTodos([...todos, newTodo]);
//         setNewTodo("");
//     };

//     let updateTodoValue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     return(
//         <div>
//             <input 
//             type="text" 
//             placeholder="Enter a task..." 
//             value={newTodo} 
//             onChange={updateTodoValue} />
//             <br />
//             <button onClick={addNewTask}>Add Task</button>
//             <br />
//             <br />
//             <br />
//             <h4>Tasks Todo</h4>
//             <ul>
//                 {
//                     todos.map((todo) => {
//                         return <li>{todo}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// import { useState } from "react";

// export default function TodoList(){
//     let [todos,setTodos] = useState([]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = () => {
//         setTodos([...todos, newTodo]);
//         setNewTodo("");
//     };

//     let updateTodoValue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     return(
//         <div>
//             <input 
//             type="text"
//             placeholder="Enter a task..."
//             value={newTodo}
//             onChange={updateTodoValue}
//             />
//             <button onClick={addNewTask}>Add Task</button>
//             <h4>Todo Tasks</h4>
//             <ul>
//                 {
//                     todos.map((todo) => {
//                         return <li>{todo}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default function TodoList(){
//     let [todos, setTodos] = useState([]);
//     let [newTodo, setNewTodos] = useState("");
//     let addNewTask = () => {
//         setTodos([...todos, newTodo]);
//         setNewTodos("");
//     };
//     let updateTodoValue = (event) => {
//         setNewTodos(event.target.value);
//     };
//     return(
//         <div>
//             <input type="text" placeholder="Enter a task..." value={newTodo} onChange={updateTodoValue} />
//             <button onClick={addNewTask} >Add Task</button>
//             <h4>Todo List</h4>
//             <ul>{
//                 todos.map((todo) => {
//                     return <li>{todo}</li>
//                 })
//                 }</ul>
//         </div>
//     )
// }

// import { useState } from "react";

// export default function TodoList(){
//     let [todos, setTodos] = useState([]);
//     let [newTodo, setNewTodo] = useState("");
//     let addNewTask = () => {
//         setTodos([...todos, newTodo]);
//         setNewTodo("");
//     }
//     let updateTodoValue = (event) => {
//         setNewTodo(event.target.value);
//     }
//     return(
//         <div>
//             <input placeholder="Add a task..." value={newTodo} onChange={updateTodoValue} />
//             <button onClick={addNewTask}>Add Task</button>
//             <h4>Todo Tasks :</h4>
//             <ul> {
//                 todos.map((todo) => {
//                     return <li>{todo}</li>
//                 })
//                 } </ul>
//         </div>
//     )
// }

import { useState } from "react";
export default function TodoList(){
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Enter a task..." value={newTodo} onChange={updateTodoValue} />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <h4>Todo List :</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}