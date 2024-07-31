const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      User.findOne({ username: username })
          .then(user => {
            if (!user) {
              return done(null, false, { message: 'Usuário não encontrado' });
            }

            bcrypt.compare(password, user.password, (error, isMatch) => {
              if(error) throw error;
              if(isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: 'Senha incorreta' });
              }
            });
          })
          .cath(error => console.log(error));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};