const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://pkorytowski:abc@cluster0.faihf.azure.mongodb.net/hello_contest_DB?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false},(err) => {
  if (err) {
    console.error('Cannot connect to the database...')
    console.error(err);
  } else {
    console.log('Connected to the database');
  }
}
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log("dziala!");
//});
var userSchema = mongoose.Schema({
  Name: String,
  Password: String
});

var User = mongoose.model('User', userSchema, 'users');
/*
var User1 = new User({Name: 'abc', Password: 'cde'});
User1.save(function (err, user){
  if (err) return console.error(err);
  console.log(user.Name + " saved to user collection.");
})*/

//db.collection('users').insertOne({Name: "abc",
//Password: "cdefgh"},)

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
    
})

app.post('/register', (req, res) => {
  
  
  console.log(req);

 
})
