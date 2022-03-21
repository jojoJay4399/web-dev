import TodoItem from "./todo-item";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
    return(
        <div>
            <h1>TODO List</h1>
        <ul> {
            todos.map(todo => {
                return(<TodoItem key = {todo.id} todo={todo}/>);
            })
        }
        </ul>
        </div>
    );
}
export default TodoList;