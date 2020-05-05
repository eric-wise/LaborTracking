const db = require('../data/dbConfig.js');

module.exports = {
    find, 
    findById,
    addEvent
    
}

// Get all Events
function find() {
    return db('events')
}

// Get events by id
function findById(id) {
    return db('events').where({ id }).first();
}

// Add event
function addEvent(event) {
    return db('events').insert(event).returning('id');
}
  