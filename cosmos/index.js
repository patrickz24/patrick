// Importation du module npm Express 
const express = require('express')
// Importation du module npm Express-Handlebars 
const exphbs  = require('express-handlebars');
// Importation du module npm SQLITE3
const sqlite3 = require('sqlite3').verbose();  
// Instaciation du module SQLITE3
const db = new sqlite3.Database('./mydb.db3');  
// Instanciation du module express
const app = express()

// Configuration de Express-handlebars dans notre appli node
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Express static pour servir des fichiers tels que CSS, des img, script jquery, webfonts ect...
app.use(express.static('public'));
// app.use(express.urlencoded())
// Pour récuperer les requêtes liée au req.body
app.use(express.urlencoded({
    extended: false
}));

// Création d'une table dans la DB
db.serialize(function() {  
    db.run("CREATE TABLE IF NOT EXISTS Prospects(name TEXT, email TEXT, message TEXT)");  
});

// Insert into Table  
db.serialize(function() {  
    db.run("INSERT into Prospects(name,email,message) VALUES ('Vimal','vimal@gmail.com', 'Vive le SQL et vive la 4G')");  
    db.run("INSERT into Prospects(name,email,message) VALUES ('Patrick','patrick@gmail.com', 'On attends pas Patrick dans le SQL !')");  
})

// Routes en GET
app.get('/', (req,res) => {
    res.render('home')
})

// Routes en POST (Récupération de données)
app.post('/', (req,res) => {
    let name = req.body.surname
    let email = req.body.email
    let message = req.body.message
    db.serialize(function() {  
        db.run(`INSERT into Prospects(name,email,message) VALUES ('${name}','${email}', '${message}')`);  
    })
    res.render('home')
})

// Port localhost
let port = 3000;
//  Écoute des routes
app.listen(port, (req,res) => {
    console.log(`Le serveur est lancé sur le port : ${port}`)
})