const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps as s')
    .innerJoin('schemes as sc', 's.scheme_id', 'sc.id')
    .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
    .orderBy('s.step_number')
    .where({ scheme_id: id });
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}
