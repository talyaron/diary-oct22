import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import mysql from "mysql";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import cookieParser from 'cookie-parser';

const password = process.env.MYSQL_PASSWORD;

//connet to db
export const  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password,
  database: 'diary'
});

connection.connect( (error: any)=> {
  if (error) {
    console.log(error);
    console.log("MySQL connection error");
  } else {
    console.log("MySQL connection succeeded");
  }
});

//to be able to get data from client add this line
app.use(cookieParser())



app.use(express.json());

//routes
//users 
import usersRoutes from "./api/users/usersRoutes";
app.use("/api/users", usersRoutes);

//static file
app.use(express.static("./client"));


app.listen(PORT, () => {
  console.log("server listen on port", PORT);
});
