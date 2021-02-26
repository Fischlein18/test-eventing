var express = require('express');
var router = express.Router();
const events = require('events');
const eventEmitter = new events.EventEmitter()
const Interaction = require('../models/interaction')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('interaction');
});

//create interaction
router.post('/interactions', async (req, res) => {
    const interactionType = req.body.type;
    // const timestamp = Date.now();
  
    const contact_arr = ['Alex', 'Bob', 'Chris', 'David', 'Eva']
    var rand_ind = Math.floor((Math.random()*contact_arr.length))
    const interactionContact = contact_arr[rand_ind]

    const channel_arr = ['Web', 'Social', 'Email', 'Mobile', 'Call Center', '']
    var rand_ind = Math.floor((Math.random()*channel_arr.length))
    const channel = channel_arr[rand_ind]

    const interaction = new Interaction({
        interactionType,
        interactionContact,
        channel
    })

    console.log(interaction)

    try {
        await interaction.save()
        console.log(interaction)
        res.status(201).send(interaction)

        eventEmitter.emit('create', {interaction});
    } catch(e) {
        res.status(400).send(e)
    }
  
  })

module.exports = router;
