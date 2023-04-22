const router = require("express").Router()
const { User } = require('../../models')

// /api/users
router
    .route('/')
    .get(async (req, res) => {
        // get all users
        try {
            const users = await User.find().select('-__v')
            res.json(users)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })
    .post(async (req, res) => {
        // create user
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })

// /api/users/:id
router
    .route('/:id')
    .get(async (req, res) => {
        // get a single user
        try {
            const user = await User.findOne({_id: req.params.id})
                .select('-__v')
                .populate('thoughts')
                .populate('friends')
                
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(400).json(err)
        }
    })
    .put(async (req, res) => {
        // update user
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {
                    runValidators: true,
                    new: true
                }
            )
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })
    .delete(async (req, res) => {
        // delete a single user
        try {
            const user = await User.findOneAndDelete({_id: req.params.id})
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(400).json(err)
        }
    })

// /api/users/:userId/friends/:friendId

router
    .route('/:userId/friends/:friendId')
    .post(async (req, res) => {
        // add a friend
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {new: true}
            )
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(400).json(err)
        }
    })
    .delete(async (req, res) => {
        // remove Friend
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            )
            res.json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    })

module.exports = router;