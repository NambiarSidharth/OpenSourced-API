const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
//route specification
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');

const app = express();
// parsing the body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    auth: {
      user: 'sidharth',
      password: 'Sidharth@1998'
    }})
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello");
});
//passport middleware
app.use(passport.initialize());
//passport Config
require('./config/passport')(passport);
//routing
app.use('/api/users',users);
app.use('/api/posts',posts);
app.use('/api/profile',profile);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("app listening on port:" + port);
});
