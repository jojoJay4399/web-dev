import TodoItem from "./todo-item";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
    return(
        <ul> {
            todos.map(todo => {
                return(<TodoItem key = {todo.id} todo={todo}/>);
            })
        }
        </ul>
    );
}
export default TodoList;