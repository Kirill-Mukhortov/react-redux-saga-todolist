const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')

const DB = {
  todos: [],
}

router.get('/api/v1/todos', (req, res) => res.json(DB.todos))

router.post('/api/v1/todos', (req, res) => {
  const options = {
    month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
  }
  const newTodo = {
    id: uuidv4(),
    text: req.body.text,
    category: req.body.category,
    completed: false,
    createDate: new Date().toLocaleString('ru-RU', options),
    completedDate: null,
  }
  DB.todos.push(newTodo)
  return res.json(newTodo)
})

router.patch('/api/v1/todos', (req, res) => {
  const currentTodo = DB.todos.find((el) => el.id === req.body.id)
  currentTodo.completed = !currentTodo.completed
  if (currentTodo.completed) {
    const options = {
      month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    }
    currentTodo.completedDate = new Date().toLocaleString('ru-RU', options)
  } else {
    currentTodo.completedDate = null
  }
  return res.json(currentTodo)
})

router.put('/api/v1/todos', (req, res) => {
  const currentTodo = DB.todos.find((el) => el.id === req.body.id)
  currentTodo.text = req.body.newText
  return res.json(currentTodo)
})

router.delete('/api/v1/todos', (req, res) => {
  const { id } = req.body
  if (id) {
    DB.todos = DB.todos.filter((el) => el.id !== id)
    return res.sendStatus(200)
  }
  return res.sendStatus(400)
})

module.exports = router
