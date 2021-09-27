const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const http = require("http");
const https = require("https");
const utils = require("./utils/index");


http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;


app.use(cors());

app.get('/',(req,res)=>{
    setImmediate(()=>{
        try{
            utils.Kampus().then((data)=>{
                res.json(data)
            })
        }catch(err){
            res.status(400).send(err);
        }
    })
})


app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Server listen on port http://localhost:${port}`);
});