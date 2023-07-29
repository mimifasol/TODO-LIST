const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
})
router.get('/register',(req, res) => {
  res.render('register')
})

module.exports = router