// TODO INPUT SECTION

// allows the user to add a todo item to the todo list

import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue} = props
  
   // Function to handle adding todos on Enter key press
   const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todoValue.trim() !== '') {
      handleAddTodos(todoValue)
      setTodoValue('')
    }
  }

  return (
    <header>
      <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)
      }}  onKeyDown={handleKeyDown} placeholder="Enter todo..." />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}> Add </button>
    </header>
  )
}
