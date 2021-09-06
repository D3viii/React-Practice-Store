import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext({
    id: "",
    name: "",
    priority: false
});
const { Provider } = TodoContext;

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: state.length * Math.random(),
                    name: action.name
                }
            ]
    }
}
