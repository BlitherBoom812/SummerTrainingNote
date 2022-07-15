import express from "express";
import route1 from './route1';
const app = express();
const port = 3000;

app.use('/route1', route1);

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`);
});