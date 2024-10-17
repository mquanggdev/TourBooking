import express ,{ Express,Request,Response} from "express";

const app : Express = express() ;
const port: number = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });