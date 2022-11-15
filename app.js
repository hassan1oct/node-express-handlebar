const express = require('express');
const app = express();
const path = require("path")
const hbs = require("hbs");

require ("./db/conn.js")

const port = process.env.PORT || 3000;

const static_path= path.join(__dirname,"../mernbackend/public")
const template_path= path.join(__dirname,"./templates/views")
const partials_path= path.join(__dirname,"./templates/partials")

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(  partials_path)

app.get("/", (req, res) => {
    res.render("index")
});
app.get('/hello', (req, res) => { 
    res.send({ message: "Hello" })
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
console.log(static_path)
