'use client';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page() {
    const [todo,setTodo] = useState("");
    const todoData = useSelector((data) => data.todosData.todos);
    const dispatch = useDispatch();
    return (
        <div className="add-user">
            <h3>
                Add Todo
            </h3>
            <input type="text" className="add-user-input" onChange={(e) => setTodo(e.target.value)} placeholder="add new task"/>
            <button className="add-user-btn" onClick={() => dispatch(addTodos(todo))}>Add Todo</button>
            <h4>Todo List</h4>
            {
                todoData.length && todoData.map((item) => {
                   return <div key={item.id}>
                   <h6>
                        {item.name}
                    </h6>
                   </div> 
})
            }
        </div>
    )
}