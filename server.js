const express = require("express")

const db = require("./data/dbConfig.js")

const server = express()
server.use(express.json())

server.post("/api/cars", (req, res) => {
    db("cars").insert(req.body)
    .then( resp => {
        res.status(201).json({id: resp[0], ...req.body})
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Error to post."
        })
    })
})

server.get("/api/cars", (req, res) => {
    db("cars")
    .then( cars => {
        res.status(200).json(cars)
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Error to get cars."
        })
    })
})

server.get("/api/cars/:id", (req, res) => {
    const { id } = req.params
    
    db("cars").where({id})
    .then( car => {
        if(car.length) {
            res.status(200).json(car[0])
        } else {
            res.status(404).json({
                errorMessage: "Car not found."
            })
        }
    })
    .catch( err => {
        res.status(500).json({
            errorMessage: "Error to get car.."
        })
    })
})

module.exports = server