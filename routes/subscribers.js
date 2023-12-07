const express = require('express')
const router = express.Router()
const Subscriber = require('../model/subscriber')
const subscriber = require('../model/subscriber')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', (req, res) => {
    
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber === null) {
            return res.status(404).json({message: 'Cannot find subscriber'})
        }
    } catch (error) {
        
    }
}

module.exports = router

