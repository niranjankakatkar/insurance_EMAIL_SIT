const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "insuerence",
});

app.get("/getallappointment", (req, res) => {
  const sql = "SELECT * FROM appointment";
  db.query(sql, (err, data) => {
      if (err){ 
           res.json("Fail to fetch");
      }
      return res.send(data);
      
  })
})

app.post("/checkLogin", (req, res) => {
  const sql = "SELECT * FROM admin_login WHERE `email` = ? AND `password` = ?";
 db.query(sql, [ req.body.username,req.body.password], (err, data) => {
      if (err){ res.json("Fail to fetch"+err); }
      if(data.length > 0){
        return res.json("1");
      } else{
        return res.json("0");
      }
      
  })
})

app.get("/", (req, res) => {
  return res.json("From Backend");
});

app.listen(8081, () => {
  console.log("Listening");
});
