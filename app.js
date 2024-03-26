const express = require('express')
const app = express()
const port = 3001

// app.get('/', (req, res) => {
//   res.send('ccccc')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

////////////////////////////////////////////////


const { Client } = require('pg');
const client = new Client({
  user: "postgres",
  host  : "127.0.0.1",
  database: "test_db",
  password: "1234",
  port: 5432,
});

/*
// const getData = () => {
//   const { Client } = require('pg');
//   const client = new Client({
//     user: "postgres",
//     host  : "127.0.0.1",
//     database: "test_db",
//     password: "1234",
//     port: 5432,
//   });
//   client.connect();
//   return new Promise(function (resolve, reject) {
//     client.query("SELECT * FROM test", (e, r) => {
//       if (e) {
//         return reject(e);
//       } else {
//         if (r.rowCount > 0) {
//           return resolve(r);
//         }
//       }
//       return resolve(false);
//     });
//   });
// };
*/

client.connect();
const getData = () => {
  return new Promise((resolve) => {
    const result = client.query("SELECT * FROM test", (e, r) => {
      // client.end;
      return resolve(r);
    });
  });
}

app.get('/', (req, res) => {
  // getData().then(r => res.send(r)).catch(e => res.send(e));
  // res.send('123asd123asd');
  getData().then(r => res.send(r));
})