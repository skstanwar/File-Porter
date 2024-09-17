const router = require('express').Router()
router.post('/',(req, res) => {
    // Log the user data received in the POST request
    const { username, password } = req.body;
    console.log(username)
    if(username=="admin" && password == "admin"){
        req.session.isAuthenticated=true;
        res.status(200).json({ message: 'Login data received successfully!' });
    }

   else{
    res.status(400).json({ message: 'Username or password is missing!' });
   }
})

module.exports = router;