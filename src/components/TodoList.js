import React from "react";
import { useTodoContext } from "../utils/GlobalState";

function TodoList() {
    const [state, dispatch] = useTodoContext();

    return (
        <div>
            <h4>Devins Todo List</h4>
            <ul className="list-group">
                {}
            </ul>
        </div>
    )
}