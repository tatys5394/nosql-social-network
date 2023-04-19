const router = require("express").Router()
const { Thought } = require('../../models')

// /api/users
router
    .route('/')
    .get(async (req, res) => {
        // get all thoughts
        try {
            const thoughts = await Thought.find().select('-__v')
            res.json(thoughts)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })
    .post(async (req, res) => {
        // create thought
        try {
            const thought = await Thought.create(req.body)
            res.json(thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })

// /api/users/:id
router
    .route('/:id')
    .get(async (req, res) => {
        // get a single thought
        try {
            const thought = await Thought.findOne({_id: req.params.id})
                .select('-__v')
                .populate('users')
                .populate('friends')
                
            res.json(thought)
        } catch (err) {
            console.error(err)
            res.status(400).json(err)
        }
    })
    .put(async (req, res) => {
        // update thought
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {
                    runValidators: true,
                    new: true
                }
            )
            res.json(thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })
    .delete(async (req, res) => {
        // delete a single thought
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.id})
            res.json(thought)
        } catch (err) {
            console.error(err)
            res.status(400).json(err)
        }
    })

module.exports = router;