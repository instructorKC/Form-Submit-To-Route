  // src/routers/users.js
  const express = require('express')
  const router = express.Router()

  // Now we simply use our "router" just like our "app" to create routes.

  router.get('/admin', (req, res) => {
    // perform some logic
    // res.json(users)

    // A function to get all the user from the
    // database and display them
    res.send('hi users');
  })

  router.get('/admin/:id', (req, res) => {
    // perform some logic
    const user = {"name": "jason", "id": "5"}
    res.json(user)
  })

  router.post('/admin', (req, res) => {
    // perform some logic

    // User fills out form and it sends
    // info to the database and creates
    // new user entry
    res.send('success')
  })



 

  // And then we export the router:

  module.exports = router