import mysql from 'mysql';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hendrick" 
});

app.get('/api/texts', (req, res) => {
  con.query("SELECT * FROM texts", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});