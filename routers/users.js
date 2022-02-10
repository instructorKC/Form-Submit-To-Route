  // src/routers/users.js
  const express = require('express')
  const router = express.Router()
  const UsersController = require('../controllers/users.js');

  // Now we simply use our "router" just like our "app" to create routes.

  router.get('/users', UsersController.showGreeting);

  router.get('/users/:id', (req, res) => {
    // perform some logic
  
    const user = {"name": "jason", "id": "5"}
    res.json(user)
  })

  router.post('/users', (req, res) => {
    // perform some logic
     let data = req.body;
    // User fills out form and it sends
    // info to the database and creates
    // new user entry
    
    console.log(data);  
    res.json(data)
  //  res.send('success')
  })



 

  // And then we export the router:

  module.exports = router
