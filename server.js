const { db } = require('./config/configDb.js');
// console.log(db)

const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const port = 8000;
const routerAuth = require("./routes/auth.js");
const routerUsers = require("./routes/user.js");
const routerBooks = require("./routes/book.js");
const generate =  require('./config/generateData')

// generate()

app.use(logger('dev'));
app.use(cors()) 
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 

app.use("/auth", routerAuth);
app.use("/users", routerUsers)
app.use("/books", routerBooks)


app.listen(port,()=>{
    console.log("Server starterd on port:"+port);
})

