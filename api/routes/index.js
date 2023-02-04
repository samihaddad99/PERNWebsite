/**
 * As implemented from: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 */

const express = require('express');
var router = express.Router();
const app = express()
const PORT = process.env.PORT || 3001; // used to be just 3001
const merchant_model = require('../merchant_model') // import the merchant functions
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
                      'https://sami-haddad.netlify.app'];
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
.route("/")
.get(async function(req, res, next) {
  merchant_model.getMerchants()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app
.route('/merchants')
.post((req, res) => {
  merchant_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app
.route('/merchants/:id')
.delete( (req, res) => {
  merchant_model.deleteMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app
.route('/merchants/:id')
.put((req, res) => {
  console.log("calling update merchant");
  merchant_model.updateMerchant(req.params.id, req.body)
  .then(response => {
    res.status(200).send(response);
  })
  // .catch(error => {
  //   res.status(500).send(error);
  // })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})

// implement merchant table routing

module.exports = router;

