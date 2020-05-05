const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findByUsername,
    update
}




function find() {
    return db('users');
}

function findById(id) {
    console.log(id)
    return db('users')
    .where({ id })
    .first();
}

function findEvent(id) {
    return db('posts')
}

function findByUsername(username){
    return findBy({ username })
    .first()

};

// current project
function update(changes, id) {
    return db("users")
      .where({ id })
      .update(changes)
      .then(res => {
        return db("users").where({ id });
      });
  }

