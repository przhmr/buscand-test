var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const tvMazeAPI = require("./apis/tvMaze")
const itunesAPI = require("./apis/itunesAPI")
require('dotenv')



//Iniciar Servidor Express

const app = express()


app.use(express.json());
app.use(cors());


//bodyparser
app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({ extended: true })),




 
//Express Simple Route
app.get('/', function (req, res) {
    res.send('Hello World!')
    
  })


  
  
// search route


app.post('/search', async function (req,res){

try{

  console.log(req.body.searchField)
  console.log("Paso 1")

console.log("Paso 2")

res.send(await itunesAPI(req.body.searchField))

let data= await tvMazeAPI(req.body.searchField)
let data1= await itunesAPI(req.body.searchField)

console.log(await itunesAPI(req.body.searchField))

console.log(data.length + " results from tvMazeAPI")
console.log(data1.resultCount + " results from itunesAPI")

console.log("Paso 3")
}

catch(err){


}
  
})




  module.exports= app