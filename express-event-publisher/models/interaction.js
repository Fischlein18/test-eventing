const mongoose = require('mongoose')
const validator = require('validator')

const interactionSchema = new mongoose.Schema({
    interactionType: {
        type: String,
        required: true
    },
    interactionContact: {
        type: String,
        required: true
    },
    channel: {
        type: String,
    }
}, {
    timestamps: true
})

const Interaction = mongoose.model('Interaction', interactionSchema)

module.exports = Interaction