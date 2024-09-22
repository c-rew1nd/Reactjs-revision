import React, { useState } from 'react'; // Importing React and useState hook
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from [react-redux](https://redux.js.org/tutorials/essentials/part-3-data-flow)
import { addTodo } from '../features/todo/todoSlice'; // Importing the addTodo action from the todoSlice

/**
 * AddTodo Component
 * This component provides a form to add new todo items.
 */
function AddTodo() {
    // useState hook to manage the input state
    const [input, setInput] = useState('');
    // useDispatch hook to get the dispatch function
    const dispatch = useDispatch();

    /**
     * Handler function for form submission
     * @param {Event} e - The event object
     */
    const addTodoHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        dispatch(addTodo({ text: input })); // Dispatch the addTodo action with the input text
        setInput(''); // Clear the input field
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            {/* Input field for entering a new todo */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input} // Bind the input value to the state
                onChange={(e) => setInput(e.target.value)} // Update the state on input change
            />
            {/* Button to submit the form */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo; // Export the AddTodo component as the default export
