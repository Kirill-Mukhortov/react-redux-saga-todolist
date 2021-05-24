/* eslint-disable react/prop-types,react/jsx-props-no-spreading,no-unused-vars,object-curly-newline,max-len,no-nested-ternary */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { List, ListItem, ListItemText, Divider, Button, Icon, TextField, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { addEditInTodo, changeStatusTodoOnServerSaga, deleteTodo, sendEdit } from '../../redux/actionCreators/todosAC'
import useStyles from '../../customHooks/useStyles'

const Todo = ({ text, category, createDate, completedDate, completed, index, id, edit }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [newText, setNewText] = useState(text)

  const changeStatusHandler = () => {
    dispatch(changeStatusTodoOnServerSaga(id))
  }

  const deleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  function showInputHandler() {
    dispatch(addEditInTodo(id))
  }

  function newTextHandler({ target: { value } }) {
    setNewText(value)
  }

  function sendEditHandler() {
    dispatch(sendEdit(id, newText))
  }

  return (
    <div className={classes.todo}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <div className={classes.indexTodo}>
            <strong>
              {index + 1}
              &#46;
            </strong>
          </div>
          {
            edit && !completed
              ? (
                <>
                  <TextField id="standard-basic" value={newText} type="text" onChange={newTextHandler} />
                  <Button
                    onClick={sendEditHandler}
                    variant="contained"
                    className={classes.editButton}
                    endIcon={<EditIcon />}
                  >
                    Редактировать
                  </Button>
                </>
              )
              : (
                <>
                  <ListItemText
                    primary={
                      <Typography className={completed ? classes.todoDone : 'not-done-yet'}>{text}</Typography>
                    }
                    secondary={createDate && completedDate ? `Создана: ${createDate} Выполнена: ${completedDate} Категория: ${category}` : `Создана: ${createDate} Категория: ${category}`}
                    onClick={showInputHandler}
                  />
                  <Button
                    onClick={changeStatusHandler}
                    variant="contained"
                    color={!completed ? 'primary' : 'default'}
                    className={classes.buttonTodo}
                    endIcon={!completed ? <Icon>send</Icon> : null}
                  >
                    {!completed ? 'Завершить' : 'Вернуть'}
                  </Button>
                  <Button
                    onClick={deleteHandler}
                    variant="contained"
                    color="secondary"
                    className={classes.buttonTodo}
                    startIcon={<DeleteIcon />}
                  >
                    Удалить
                  </Button>
                </>
              )
          }
        </ListItem>
      </List>
      <Divider />
    </div>
  )
}

export default Todo
