/**
 * As implemented from: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 */

const express = require('express');
var router = express.Router();
const app = express();
const PORT = process.env.PORT || 3001; // used to be just 3001
const user_model = require('../user-model'); // import the user functions
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

const allowedOrigins = ['https://pernstack-backend.herokuapp.com/',
                      'https://sami-haddad.netlify.app',
                      'http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app
.route("/users")
.get(async function(req, res, next) {
  user_model.getUsers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app
.route('/users')
.post((req, res) => {
  user_model.createUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app
.route('/users/:id')
.delete( (req, res) => {
  user_model.deleteUser(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app
.route('/users/:id')
.put((req, res) => {
  console.log("calling update user");
  user_model.updateUser(req.params.id, req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})

// implement user table routing

module.exports = router;

