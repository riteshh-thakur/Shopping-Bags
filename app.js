const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("./config/mogoose-connection");
const ownersRouter= require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

app.set("view engine", "ejs" );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.use("/owners", ownersRouter);

app.use("/users", usersRouter);

app.use("/products", productsRouter);


console.log("server listening");
app.listen(3000);