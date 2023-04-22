const router = require("express").Router()
const thoughtsRoutes = require("./thought-routes")
const userRoutes = require('./user-routes')

router.use("/users",userRoutes)
router.use("/thoughts",thoughtsRoutes)

module.exports = router