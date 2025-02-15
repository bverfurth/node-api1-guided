// IMPORTS AT THE TOP
const express = require('express')
const Dog = require('./dog-model.js')
// INSTANCE OF EXPRESS APP
const server = express()
// GLOBAL MIDDLEWARE //
server.use(express.json()) // teaches express to read JSON
// ENDPOINTS

// [GET] / (Hello World endpoint)
server.get('/', (req, res) => {
  res.status(200).json({ message: 'hey there' })
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req, res) => {
  Dog.findById(req.params.id)
    .then(dog => {
      if(dog) {
        res.json(dog)
      } else {
        res.status(404).json({ message: })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
})
// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
  res.json('fetch all dogs')
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res)=> {
  res.json('create new dog')
})
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
server.put('/api/dogs/:id', (req, res)=> {
  res.json('update exisitn dog')
})
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', (req, res)=> {
  res.json('delete do with id')
})

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server
