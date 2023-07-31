const express = require('express')
const router = express.Router()

const User = require('../../models/user') /*引入user model */

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {

})

router.get('/register',(req, res) => {
  res.render('register')
})

router.post('/register',(req, res)=>{
  //取得註冊表單參數
  const { name, email, password, confirmPassword } = req.body
  //檢查使用者是否已註冊
  User.findOne({ email }).then(user => {
    if (user){
      console.log('User already exists.')
      res.render('register',{//再附上表單參數
        name,
        email,
        password,
        confirmPassword
      })
    }else {
      return User.create({
        name,
        email,
        password
      })
        .then(()=> res.redirect('/'))
        .catch(err => console.log(err))
    }
  }).catch(err => console.log(err))
})

module.exports = router