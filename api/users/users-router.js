const db = require('../../data/dbConfig');

function find() {
    return db('users as u')
        .select('u.user_id', 'u.username')
}

function findById(id) {
    return db('users').where('id', id).first()
  }

async function insert(user){
    const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports = {
    find, findById, insert
}