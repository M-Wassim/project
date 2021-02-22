const express = require('express');
const Dbconnect = require('./config/connectDb');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const app = express();

app.use(express.json());

// connection to DataBase
Dbconnect();
// routes

app.use('/api/users', require('./routes/api/user'));

app.use('/api/levels', require('./routes/api/level'));
app.use('/api/courses', require('./routes/api/course'));
app.use('/api/quizs', require('./routes/api/quiz'));
app.use('/admin', require('./routes/adminRoute'));

// create Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
