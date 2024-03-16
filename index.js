const express = require('express')
const bodyParser = require('body-parser');


const app = express();
const port = 3000


//middleware
app.use(bodyParser.json());

app.get('/', function(req, res)  {
    console.log(req.body);
  res.send({
	  msg: "2+2 =4"
  })
})

app.post('/', function(req, res)  {

    console.log(req.headers["authorization"])
  res.send({
	  msg: "2+2 =4"
  })
})

app.listen(port) 