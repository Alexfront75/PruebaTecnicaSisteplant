const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/taskRoutes');

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
}));
app.use(express.json());
app.use(tasksRoutes);

mongoose.connect('mongodb://localhost:27017/tasks');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})