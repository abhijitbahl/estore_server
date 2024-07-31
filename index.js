const express = require('express');
const app = express();
const PORT=5001;

app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>');
})
const server = app.listen(PORT, ()=>{
    console.log('App is running on the port 5001')
});