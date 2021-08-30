const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rjsdhdi2',
  database: 'simpleboard',
});

app.get('/', (req, res) => {
  const sqlQuery =
    "INSERT INTO simpleboard (title, content) VALUES ('해리포터', '나쁜 영화!')";
  db.query(sqlQuery, (err, result) => {
    res.send('success!');
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
