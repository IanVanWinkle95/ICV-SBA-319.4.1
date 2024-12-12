const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection
const toDo = require('../models/toDo.js')
const toDoData = require('../utilities/data.js')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
const mongoURI = process.env.MONGODB_URI

app.use(express.static(path.join(__dirname, 'public')))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err))

const toDoDisplay = new mongoose.Schema({
  task: stringify,
  completed: Boolean
})

// Routes
const toDoRoutes = require('../routes/toDo.js')
app.use('/toDo', toDoRoutes)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})