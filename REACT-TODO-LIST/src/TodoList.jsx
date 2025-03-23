// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TodoList(){
    
//     let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
//     let [newTodo, setNewTodo] = useState("");

//     let addNewTask = () => {
//         setTodos((prevTodos) => {
//             return  [...todos, {task: newTodo, id: uuidv4(), isDone: false}];
//         });
//         setNewTodo("");
//     }

//     let updateTodoValue = (event) => {
//          setNewTodo(event.target.value);
//     };

//     let deleteTodo = (id) => {
//         setTodos(todos.filter((todos) => todos.id != id));
//     };

//     let markAll = (id) => {
//         setTodos((prevTodos) => (
//             prevTodos.map((todo) => {
//                 return {
//                     ...todo,
//                     isDone: true,
//                 }
//             })
//         ))
//     };

//     let completeTask = (id) => {
//         setTodos((prevTodos) => (
//             prevTodos.map((todo) => {
//                 if(todo.id == id){
//                     return {
//                         ...todo,
//                         isDone: true,
//                     }
//                 } else {
//                     return todo;
//                 }
//             })
//         ))
//     };

//     let upperCaseThis = (id) => {
//         setTodos((prevTodos) => (
//             prevTodos.map((todo) => {
//                 if(todo.id == id){
//                     return {
//                         ...todo,
//                         task: todo.task.toUpperCase(),
//                     }
//                 } else {
//                     return todo;
//                 }
//             })
//         ))
//     };

//     return(
//         <div>
//             <input type="text" placeholder="Enter new task..." value={newTodo} onChange={updateTodoValue} />
//             <button onClick={addNewTask}>Add Task</button>
//             <h4>Your Todo list :</h4>
    
//             <ul>
//                 {
//                     todos.map((todo) => (
//                         <li key={todo.id} >
//                             <span style={todo.isDone ? {textDecoration: "line-through", textDecorationColor: "red"} : {}}>{todo.task}</span>

//                             <button onClick={()=>deleteTodo(todo.id)} >delete</button>
//                             <button onClick={()=>completeTask(todo.id)}>complete</button>
//                             <button onClick={()=>upperCaseThis(todo.id)}>upper Case This</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//             </div>
//     )
// };

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo_list(){
    let [ todos, setTodos ] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [ newTodo, setNewTodo ] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...todos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos(todos.filter((todos) => todos.id != id));
    };

    let markAll = (id) => {
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        ))
    };

    let upperCase = (id) => {
        setTodos((todos) => (
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                } else{
                    return todo;
                }
            })
        ))
    };

    return(
        <div>
        <input type="text" value={newTodo} onChange={updateTodoValue} />
        <button onClick={addNewTask}>Add Todo</button>
        <h4>Todo List</h4>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration: "line-through", textDecorationColor: "red"} : {}}>{todo.task}</span>
                        <button onClick={() => upperCase(todo.id)}>Upper Case</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
        <button onClick={()=>markAll(todos.id)}>Mark all</button>
        </div>
    )
}