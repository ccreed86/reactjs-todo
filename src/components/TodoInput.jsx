// TODO INPUT SECTION

// allows the user to add a todo items to the todo list

import React, { useState } from 'react'

export default function TodoInput(props) {
  // Destructuring props to access the add todo function and input state
  const {handleAddTodos, todoValue, setTodoValue} = props
  
   // Function to handle adding todos on 'Enter' key press
   const handleKeyDown = (e) => {
    // Check if the pressed key is "enter" and the input value is not empty
    if (e.key === 'Enter' && todoValue.trim() !== '') {
      // Call the function to add a new todo
      handleAddTodos(todoValue)
      // Clear the input field after adding the todo item
      setTodoValue('')
    }
  }

  return (
    <header>
      {/*Input field for entering a new todo item*/}
      <input value={todoValue} //Controlled input with current value fo the todo item
      onChange={(e) => {
        setTodoValue(e.target.value) //Update the input value as the user types
      }}  
      onKeyDown={handleKeyDown} // Handle the "Enter" key press to add the todo item
       placeholder="Enter todo..." // Placeholder Text
       /> 

       {/* Button to manually add the todo item when clicked */}
      <button 
        onClick={() => {
          // Call teh add todo function and reset the input field
          handleAddTodos(todoValue)
          // Resets the input field to placeholder text after the todo item has been added
        setTodoValue('')
      }}> Add </button>
    </header>
  )
}
