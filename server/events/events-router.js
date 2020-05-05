const router = require('express').Router();

const Events = require('./events-model.js');

const nopass = require('../auth/authenticate-middleware');

// Get all events
router.get('/', (req,res) => {
    Events.find()
    .then(event => {
        res.json(event);
    })
    .catch(err => {
        res
        .status(500)
        .json({message: 'Error fetching events', err})
    })

})

// Get event by ID
router.get('/:event_id', (req, res, next) => {
    const { event_id } = req.params;

    Events.findById(event_id)
      .then(event => {
        if (event) {
          res.status(200).json(event);
        } else {
          res
            .status(400)
            .json({
                message: 'Could not find event with id'
            });
        }
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: 'Error fetching event', err });
      });
  }
);

// Add event
router.post('/', (req, res, next) => {
    const EventData = req.body;

    Events.addEvent(EventData)
    .then(event => {
      res.status(201).json(event);
    })
    .catch(err => {      
      res.status(500).json({
        message: 'Failed to create new event',
        err
      });
    });
});


// Delete event


module.exports = router;