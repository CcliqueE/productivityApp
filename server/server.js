const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Query } = require('pg')

app.use (cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).send(err.message)
    }
})

app.post('', async (req, res) => {
    try {

    } catch(err) {
        res.status(500).send(err.message)
    }
})

app.listen(5000, () => {console.log('server has started on port 5000')})