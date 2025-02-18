module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "You shall not pass!" });
  }
};

// const { username, password } = req.headers;

// if (username && password) {
//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         next();
//       } else {
//         res.status(401).json({ message: 'Invalid Credentials' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Ran into an unexpected error' });
//     });
// } else {
//   res.status(400).json({ message: 'No credentials provided' });
// }

// first way using a session, second using password hashing
