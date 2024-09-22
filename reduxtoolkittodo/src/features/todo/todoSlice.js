import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id:1,
            text: "Hello-world"
        }
    ]
}

export const todoSlice = new createSlice({
    name: 'todo',
    initialState,
    reducers :{
/*
 * Adds a new todo item to the state.
 *
 * {Object} state - The current state of the todos.
 * {Object} action - The action dispatched.
 * {Object} action.payload - The payload of the action.
 * {string} action.payload.text - The text of the new todo item.
 */
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        /**
 * Removes a todo item from the state based on the provided action payload.
 *
 *  {Object} state - The current state of the todos.
 *  {Object} action - The action object containing the payload.
 *  {number|string} action.payload - The ID of the todo item to be removed.
 */
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        },
/**
 * Deletes a todo item from the state based on the provided action payload.
 *
 * {Object} state - The current state of the todos.
 * {Object} action - The action object containing the payload.
 * {number|string} action.payload - The ID of the todo item to be deleted.
 */
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
/**
 * Updates a todo item in the state based on the provided action payload.
 *
 * {Object} state - The current state of the todos.
 * {Object} action - The action object containing the payload.
 * {Object} action.payload - The payload containing the ID of the todo item to be updated and the new data.
 * {number|string} action.payload.id - The ID of the todo item to be updated.
 * {Object} action.payload.data - The new data for the todo item.
 */
        updateTodo:(state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id ? { ...todo, ...action.payload.text } : todo
            )
        }
    }
})

export const {addTodo, removeTodo, deleteTodo, updateTodo} = todoSlice.actions