const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
const users = [{ "username": "admin", "password": "$2b$10$34CfcHjT2HrhI8izmOnouOne6.yblpDmQtrwOZUnF9GnpGOsaySNa" }]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)

    console.log(user)

    console.log(req.body.password)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            // allow access to rtmp server
            res.json('Success')
        } else {
            res.json('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)
