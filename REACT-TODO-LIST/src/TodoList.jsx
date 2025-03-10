// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TodoList(){
//     let [todos, setTodos] = useState([{task: "Sample task", id: uuidv4(), isDone: false}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = () => {
//         setTodos((prevTodos) => {
//             return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
//         });
//         setNewTodo("");
//     };

//     let updateTodoValue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     let deleteTodo = (id) => {
//         setTodos(todos.filter((todo) => todo.id != id));
//     }

//     let upperCaseAll = () => {
//         setTodos((prevTodos) => (
//             prevTodos.map((todo) => {
//                 return {
//                     ...todo,
//                     task: todo.task.toUpperCase(),
//                 };
//             })
//         ))
//     };

//     let completeTask = (id) => {
//         setTodos((todos) =>
//             todos.map((todo) => {
//                 if(todo.id == id){
//                     return{
//                         ...todo,
//                         isDone: true,
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         )
//     };

//     return(
//         <div>
//             <input id="input" type="text" placeholder="Enter a task..." value={newTodo} onChange={updateTodoValue} />
//             <button id="todo_btn" onClick={addNewTask}>Add task</button>
//             <br /><br />
//             <h2 style={{color: "#3B1E54"}}>My todo List</h2>
//             <ul>
//                 {
//                     todos.map((todo) => (
//                         <li key={todo.id}>
//                             <span style={todo.isDone ? { textDecorationLine: "line-through", textDecorationColor:"red"} : {}}>{todo.task}</span>
//                             <button id="delete_btn" onClick={() => deleteTodo(todo.id)}>delete</button>
//                             <button id="li_btn" onClick={() => completeTask(todo.id)}>Done</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//             <br /><br />
//             <button id="todo_btn" onClick={markAll}>Mark All</button>
//         </div>
//     )
// }

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return  [...todos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
         setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos(todos.filter((todos) => todos.id != id));
    };

    let markAll = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        ))
    };

    let completeTask = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    }
                } else {
                    return todo;
                }
            })
        ))
    };

    let upperCaseThis = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                } else {
                    return todo;
                }
            })
        ))
    };

    return(
        <div>
            <input type="text" placeholder="Enter new task..." value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add Task</button>
            <h4>Your Todo list :</h4>
    
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} >
                            <span style={todo.isDone ? {textDecoration: "line-through", textDecorationColor: "red"} : {}}>{todo.task}</span>

                            <button onClick={()=>deleteTodo(todo.id)} >delete</button>
                            <button onClick={()=>completeTask(todo.id)}>complete</button>
                            <button onClick={()=>upperCaseThis(todo.id)}>upper Case This</button>
                        </li>
                    ))
                }
            </ul>
            <br />
            <br />
            <button onClick={markAll}>Mark all</button>
        </div>
    )
}