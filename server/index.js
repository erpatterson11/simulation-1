const express = require('express'),
      { json } = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      config = require('./config'),
      port = 3005


const app = express()

massive(config.dbConnectString).then( dbInstance => app.set('db', dbInstance) )

app.use(cors())
app.use(json())


app.get('/api/test', (req,res) => {
    const db = req.app.get('db')
    console.log(db)
    res.json("testy test test")
})

app.get('/api/shelf/:shelf', (req,res) => {
    const db = req.app.get('db')
    const shelf = req.params.shelf
    db.get_shelf_contents([shelf]).then( contents => {
        console.log(contents)
        res.json(contents)
    })
})

app.get('/api/bins/:shelf/:bin', (req,res) => {
    const db = req.app.get('db')
    const {bin, shelf} = req.params
    db.get_bin_contents([bin,shelf]).then( contents => {
        console.log(contents)
        res.json(contents)
    })
})

app.put('/api/bins', (req,res) => {
    const db = req.app.get('db')
    const { bin, shelf, name, price } = req.body
    db.update_bin_contents([name, price, bin, shelf]).then(changed => {
        console.log(changed)
        res.json(changed)
    })
})








app.listen(port, () => console.log(`listenting on port:${port}`))