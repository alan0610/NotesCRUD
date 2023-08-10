const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes")
const cors = require("cors")

const PORT = process.env.PORT || 3030
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{ 
    console.log("El servidor RED corriendo en: http://localhost:3030/");
});

app.use("/", routes)