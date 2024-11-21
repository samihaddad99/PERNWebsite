/**
 * As implemented from: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
 */

const { Pool } = require('pg')

// heroku pool
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const pool = new Pool({
//   connectionString: isProduction
//     ? process.env.$(DATABASE_URL) // Heroku will supply us with a string called DATABASE_URL for the connectionString,
//     : connectionString,
//   ssl: isProduction ? { rejectUnauthorized: false } : false,
// });

// heroku pool
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const connectionString = $DATABASE_URL;
const pool = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL // Heroku will supply us with a string called DATABASE_URL for the connectionString
    : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

const getUsers = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM users ORDER BY id ASC;', (error, results) => {
      if (error) {
        reject(error)
      }
      console.log(results.rows)
      resolve(results.rows);
    });
  });
}
  
const createUser = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`New user added: ${JSON.stringify(results.rows[0])}`)
    })
  })
}
  
const deleteUser = (userId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(userId)

    pool.query('DELETE FROM users WHERE id = $1;', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`User deleted with ID: ${id}`)
    })
  })
}

const updateUser = (id, body) => {
  console.log("id " + id + ", name " + body.name + ", email " +  body.email);
  return new Promise(function(resolve, reject) {
    let pid = parseInt(id)
    
    pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3;',[body.name, body.email, pid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`User updated with ID: ${pid}`)
    })
  })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
}