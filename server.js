const express = require('express');
const app = express();
const port = 3000;

const employees = [
    { id: 1, name: 'Ali', age: 25 },
    { id: 2, name: 'Leyla', age: 30 },
    { id: 3, name: 'Mahir', age: 28 }
];

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});