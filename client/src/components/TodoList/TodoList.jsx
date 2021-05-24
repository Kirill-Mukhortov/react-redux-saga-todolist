/* eslint-disable react/prop-types,object-curly-newline,max-len */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitTodoSaga } from '../../redux/actionCreators/todosAC'
import Todo from '../Todo/Todo'
import useStyles from '../../customHooks/useStyles'

const TodoList = () => {
  const classes = useStyles()
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitTodoSaga())
  }, [])

  return (
    <div className={classes.todoList}>
      {
        todos.length ? todos.map((el, index) => (
          <Todo
            category={el.category}
            createDate={el.createDate}
            completedDate={el.completedDate}
            edit={el.edit}
            key={el.id}
            id={el.id}
            index={index}
            text={el.text}
            completed={el.completed}
          />
        )) : <p>Записей нет...</p>
      }
    </div>
  )
}

export default TodoList
