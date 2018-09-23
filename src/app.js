const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

var db;


app.get('/', (req, res)=>{
  console.log('Current Directory - ' + __dirname);
  res.send(
      'EXPRESS IS UP AND RUNNING!!'
    )
})

//call MONGODB from here - heroku 
app.get('/posts', (req, res)=>{
    res.send(
        [{
          color: "Hello World!",
          value: "Hi there! I am calling from Express!"
        }]
      )
})

app.get('/catalog', (req, res)=>{
  res.sendFile(__dirname + '/details.html');
})

app.listen(process.env.PORT || 8081);


/*
MongoClient.connect('mongodb://testuser:testuser_2018@ds157742.mlab.com:57742/test-mevn', (err, client) => {
    debugger;
    if(err)
      console.log(err);

      db = client.db('test-mevn') // whatever your database name is
      app.listen(3000, () => {
        console.log('listening on 3000')
      })
})


app.get('/', (req, res) => {
  debugger;
  db.collection('diyDetails').find().toArray(function(err, results) {
    //console.log(results)
    res.send(results);
    // send HTML file populated with quotes here
  })
})

*/

