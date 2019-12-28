var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient
var db
const bodyParser= require('body-parser')

const Bot = require('./Bot')


app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
    let collection = db.collection('pokemons').find().toArray(function(err, results) {
      res.json(results)
      // send HTML file populated with quotes here
    })
  });

  
  app.get('/bot/position', (req,res)=>{
    res.json(new Bot().getPosition())
  })



MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err, client) => {
  if (err) return console.log(err)
  db = client.db('pokemondb') // whatever your database name is
  app.listen(8000, () => {
    console.log('listening on 8000')
  })
})

