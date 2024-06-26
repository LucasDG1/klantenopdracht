import mysql from 'mysql';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hendrick"
});

con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
  console.log('Connected to the database');
});

app.get('/api/texts', (req, res) => {
  con.query("SELECT * FROM texts", (err, result) => {
    if (err) {
      console.error('Error fetching texts:', err);
      res.status(500).json({ error: 'Failed to fetch texts' });
      return;
    }
    res.json(result);
  });
});

app.post('/api/texts', (req, res) => {
  const { text_id, text } = req.body;
  if (!text_id) {
    res.status(400).json({ error: 'text_id is required' });
    return;
  }
  con.query("UPDATE texts SET text = ? WHERE text_id = ?", [text, text_id], (err, result) => {
    if (err) {
      console.error('Error updating text:', err);
      res.status(500).json({ error: 'Failed to update text' });
      return;
    }
    res.json(result);
  });
});

app.delete('/api/texts/:text_id', (req, res) => {
  const { text_id } = req.params;
  con.query("DELETE FROM texts WHERE text_id = ?", [text_id], (err, result) => {
    if (err) {
      console.error('Error deleting text:', err);
      res.status(500).json({ error: 'Failed to delete text' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Text not found' });
      return;
    }
    res.json(result);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
