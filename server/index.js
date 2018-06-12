const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use( bodyParser.json() );
app.use(cors());

let animals = [
  {
    name: 'Armadillo',
    id: '1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/1200px-Nine-banded_Armadillo.jpg'
  },
  {
    name: 'Tiger',
    id: '2',
    imageUrl: 'http://kids.sandiegozoo.org/sites/default/files/2017-06/animal-hero-tiger_0.jpg'
  },
]

const port = 3000;

app.get('/animals', (req, res) => {
  res.send(animals);
}),

app.post('/animals', (req, res) => {
  console.log("this is req.body", req.body)
  animals.push(req.body);
  res.send(animals);
}),

app.delete('/animals' (req, res) => {
  animals.delete(req.body);
  console.log('deleted animals');
}),

app.listen( port, () => { console.log(`Server listening on ${port}`); } );
