const router = require('express').Router();
const Users = require('../auth/auth-model')

router.get('/', (req,res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log(err);
            res
                .status(500)
                .json({ message: 'Error fetching Users', err })
        })

})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.findById(id)
    .then(user => {  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
  });


router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    // const { username, password, email } = req.body;
  
    Users.findById(id)  
      .then(user => {
      if (user) {
        Users.update(id, changes).then(updatedUser => {
          res.status(200).json(updatedUser);
        });
      } else {
        res.status(400).json({
          message: 'Could not find user with given id',
          err
        });
      }
    })
     .catch(err => {
      res
        .status(500)
        .json({ message: 'Failed to update user', err });
    });
});
  
  

module.exports = router;