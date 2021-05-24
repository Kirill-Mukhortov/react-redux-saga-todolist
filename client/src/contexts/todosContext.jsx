// -----! Используем Redux вместо Context !-----

// import React, { createContext, useContext, useEffect, useState } from 'react'

// const todosContext = createContext()

// const TodosContextProvider = ({ children }) => {
// const [todos, setTodos] = useState([])

// useEffect(() => {
//   fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`)
//     .then((response) => response.json())
//     .then((todosFromServer) => setTodos(todosFromServer.map((el) => ({ ...el, edit: false }))))
// }, [])

// const addHandler = (text, category) => {
//   fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text, category }),
//   })
//     .then((response) => response.json())
//     .then((newTodoFromServer) => setTodos((prev) => [...prev, newTodoFromServer]))
// }

// const changeStatusHandler = (id) => {
//   fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id }),
//   })
//     .then((response) => response.json())
//     .then((updatedTodoFromServer) => setTodos((prev) => prev.map((todo) => {
//       if (todo.id === id) {
//         return updatedTodoFromServer
//       }
//       return todo
//     })))
// }

// const editHandler = (id) => {
//   setTodos((prev) => prev.map((el) => {
//     if (el.id === id) {
//       return { ...el, edit: true }
//     }
//     return { ...el, edit: false }
//   }))
// }

// const sendEditOnServer = (id, newText) => {
//   fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id, newText }),
//   })
//     .then((response) => response.json())
//     .then((updatedTodoFromServer) => setTodos((prev) => prev.map((todo) => {
//       if (todo.id === id) {
//         return updatedTodoFromServer
//       }
//       return todo
//     })))
// }

// const deleteHandler = (id) => {
//   fetch(`${process.env.REACT_APP_API_URL}/api/v1/todos`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id }),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         setTodos((prev) => prev.filter((el) => el.id !== id))
//       }
//     })
// }

//   return (
//     <todosContext.Provider value={{
//       todos, addHandler, changeStatusHandler, deleteHandler, editHandler, sendEditOnServer,
//     }}
//     >
//       {children}
//     </todosContext.Provider>
//   )
// }
//
// export default TodosContextProvider
//
// export const useTodoContext = () => useContext(todosContext)
