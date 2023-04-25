import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

// connect mysql db
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'react_mysql-crud'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if (err)
            return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});
// initial
app.listen(port, () => {
    console.log(`listening.... on port ${port}`)
});