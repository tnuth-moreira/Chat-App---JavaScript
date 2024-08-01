const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username });
    await User.register(newUser, password);
    res.redirect('/api/users/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao registrar usuário');
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/chat',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
