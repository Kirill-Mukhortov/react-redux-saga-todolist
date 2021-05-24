/* eslint-disable react/prop-types,object-curly-newline,no-unused-vars,max-len,no-use-before-define */
import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { TextField, Typography, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actionCreators/todosAC'
import useStyles from '../../customHooks/useStyles'
import useTheme from '../../customHooks/useTheme'

const Form = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const [input, setInput] = useState('')
  const [category, setCategory] = useState('дом')

  const submitHandler = async (e) => {
    e.preventDefault()
    const text = input.trim()
    dispatch(addTodo(text, category))
    setInput('')
  }

  const inputHandler = ({ target: { value } }) => {
    setInput(value)
  }

  const categoryChangeHandler = ({ target: { value } }) => {
    setCategory(value)
  }

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Введите задачу..." value={input} type="text" onChange={inputHandler} />
        <Button type="submit" size="large" variant="contained" color="primary">
          + Добавить
        </Button>
        <FormControl component="fieldset" className={classes.radioButtons}>
          <FormLabel component="legend">Тематика задачи:</FormLabel>
          <RadioGroup aria-label="themes" name="themes" className={classes.radioButtons} value={category} onChange={categoryChangeHandler} row>
            <FormControlLabel value="дом" control={<Radio color="primary" />} label="Дом" />
            <FormControlLabel value="работа" control={<Radio color="primary" />} label="Работа" />
            <FormControlLabel value="учеба" control={<Radio color="primary" />} label="Учёба" />
          </RadioGroup>
        </FormControl>
      </form>
      <hr />
      <ThemeProvider theme={useTheme}>
        <Typography variant="subtitle1">
          <div className={classes.tasksCount}>
            Всего задач:&nbsp;
            {todos.length}
            , выполнено:&nbsp;
            {todos.filter((el) => el.completed).length}
          </div>
        </Typography>
      </ThemeProvider>
    </>
  )
}

export default Form
