
 // DEMONSTRATION ONLY
 const findWithQuery = async () => {
    const users = []
    if(users.length === 0){
      res.send("empty users")
    }
    else if (req.body.query) {
      // go find users that match that query
      const users = await db.find(query)
    }
    else if (!users.length) {
      // no users, throw error
      res.status(404).send('No users found')
    }
    else{
      res.json(users)
    }
    
  }

  const showGreeting = (req,res) => {
    let sum = 1+1;
     res.send(`Greeting user ${sum}`);
  }

  // exports each of the functions/methods we build as an object
  module.exports = {
    findWithQuery,
    showGreeting,
    // other methods could be listed here with a ',' after each.
  }