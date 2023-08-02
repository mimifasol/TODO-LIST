const express = require('express')
const router = express.Router()

const passport = require('passport') //引用passport
const bcrypt = require('bcryptjs')
const User = require('../../models/user') /*引入user model */

router.get('/login', (req, res) => {
  res.render('login')
})

//加入middleware，驗證request登入狀態
router.post('/login', passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/users/login'
}))

router.get('/register',(req, res) => {
  res.render('register')
})

router.post('/register',(req, res)=>{
  //取得註冊表單參數
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: '所有欄位都是必填。' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相符！' })
  }
  if (errors.length) {
    return res.render('register', {
      errors,
      name,
      email,
      password,
      confirmPassword
    })
  }
  //檢查使用者是否已註冊
  User.findOne({ email }).then(user => {
    if (user){
      errors.push({message: '此email已註冊'})
      return res.render('register',{
        errors,
        name,
        email,
        password,
        confirmPassword
      })
    }
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => User.create({
        name,
        email,
        password: hash //以雜湊值取代原本使用者密碼
      }))
        .then(()=> res.redirect('/'))
        .catch(err => console.log(err))
  })
})

router.get('/logout',(req, res) =>{
  req.logout()
  req.flash('success_msg', '你已經成功登出。')
  res.redirect('/users/login')
})

module.exports = router