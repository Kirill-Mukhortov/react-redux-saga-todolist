const express = require('express')
const cors = require('cors')
const crudRoutes = require('./routes/crudRoutes')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', crudRoutes)

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})
