const express = require('express')
const port = process.env.PORT || 4000;
const users = require('./routers/users');
// const users = require('./routers/admin');
const app = express()
 // tell our Express server to serve the files in the public folder
 app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


 app.use(users);
// app.use(customers)
// app.use(merchants)
// app.use(admin)
app.use( express.static('public')) // http://localhost:4000/
app.get('/', (req, res) => {  // http://localhost:4000/
  res.send('Hello world')
})

app.use('/myHTML', express.static('public')) // http://localhost:4000/myHTML
app.get('/home', (req, res) => {  // http://localhost:4000/home
  res.send('Hello world')
})




app.listen(port, () => { 
    console.log(`Server is listening on port ${port}.`)
  })