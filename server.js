require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT 
const bodyparser = require('body-parser');
app.use(express.static("public"));

// this is a body pata convert data in json 
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

const adminRouter=require('./src/routes/adminRoute')
app.use("/admin",adminRouter)

const schoolRouter=require('./src/routes/schoolRoute')
app.use("/school",schoolRouter)

const studentRouter=require('./src/routes/studentRoute')
app.use("/student",studentRouter)

const classRouter=require('./src/routes/classRoute');
app.use("/class",classRouter)

const teacherRouter=require('./src/routes/teacherRoute')
app.use("/teacher",teacherRouter)

const subjectRouter=require('./src/routes/subjectRoute')
app.use("/subject",subjectRouter)

const systemRouter=require('./src/routes/systemRoute')
app.use("/system",systemRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))