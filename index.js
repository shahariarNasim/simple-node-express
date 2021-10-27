const express = require('express');
const app = express();

const  cors = require('cors');
app.use(cors());
app.use(express.json());


const port = 4000;
app.get('/', (req, res) => {
    res.send('Hello from my node and nodemon hi');
  });
   const users= [
     {id:0, name: 'Nasim', email:'nasim@gmail.com', phone:"01725-481641"}, 
     {id:1, name: 'Aasim', email:'aasim@gmail.com', phone:"01625-481641"},
     {id:2, name: 'Khasim', email:'khasim@gmail.com', phone:"01825-481641"},
     {id:3, name: 'Shasim', email:'shasim@gmail.com', phone:"01925-481641"},
     {id:4, name: 'Thasim', email:'thasim@gmail.com', phone:"01525-481641"},
     {id:5, name: 'Rhasim', email:'rhasim@gmail.com', phone:"01325-481641"},
   ]
  app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
     res.send(searchResult);
    }
    else{
      res.send(users);
    }
  });

  app.post('/users', (req, res) => {
    const newUser= req.body;
    newUser.id=users.length;
    users.push(newUser)
    console.log('hit me', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
  })


  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id] ;
    res.send(user);
    console.log(user);
  });
  app.get('/fruits/apple/green', (req, res) => {
    res.send('hi')
  })
  app.listen(port, () => {
    console.log('liteninig to port',port);
  });