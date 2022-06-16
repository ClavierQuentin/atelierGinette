/*const express = require('express')
const cors = require('cors')
const data = require("./data.js")
const app = express()
const mysql = require('mysql')
const { type, json, jsonp } = require('express/lib/response');
const path = require('path');
const { request } = require('http');*/

const { type } = require('express/lib/response');
const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);

const errorHandler = error => {
    if(error.syscall !== "listen"){
        throw error;
    }
    const address = server.address();
    const bind = typeof address === "string" ? "pipe" + address : "port" + port;
    switch(error.code){
        case "EACCES": 
            console.error(bind + "Requires elevated provileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + "is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};


const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe" + address : "port " + port;
    console.log("Listening on " + bind);
})
server.listen(port);

//const  Sequelize = require('sequelize');
/*
const sequelize = new Sequelize("genie1829577_12bkj", "genie1829577_12bkj","Dwwm2022@1984",{
    dialect:"mysql",
    host: "185.98.131.176"
})

    try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
     }*/

/*app.use(cors())*/
/*
app.get('/api/produit/', (req,res) => {
    res.send(data.listeCategories);
})
app.get("/pages/categories/:id", (req, res) => {
    let response = []
    for(let i = 0; i < data.listeProduits.length; i++){
        if(req.params.id == data.listeProduits[i].id_categorie){
            response.push(data.listeProduits[i]);
        }
    }
    res.send(response) 
})
app.get("/pages/produit/:id", (req,res) => {
    let response = []
    for(let y = 0; y<data.listeProduits.length; y++){
        if(req.params.id == data.listeProduits[y].id_produit){
            response.push(data.listeProduits[y]);
        }
    }
    res.send(response)
})
app.get("/pages/about", (req,res) => {
    res.send(data.photosPrez)
}) */
//Connexion

/*const db = mysql.createConnection({
    host: '185.98.131.176',
    user: 'genie1829577_12bkj',
    password: 'Dwwm2022@1984',
    database: 'genie1829577_12bkj'
})
db.connect((err) =>{
    if(err){
        throw err
    }
    console.log('Connecté à MySql');
}) */
 

/*
app.get("/api/produit/", (req, res) => {
    let sql = `SELECT * FROM categories`
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
});
app.get("/pages/categories/:id", (req, res) => {
    let sql = `SELECT * FROM produits WHERE id_categorie = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result);
    })
});
app.get("/pages/produit/:id", (req, res) => {
    let sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
    })
})
app.get("/pages/panier/:id", (req, res) => {
    let sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
    })
})
app.get("/pages/about", (req,res) => {
    let sql = `SELECT * FROM images_prez`;
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
})*/

/*app.use(express.static(path.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });*/
/*app.listen(5000, () => {
    console.log('serveur sur http://localhost:5000');
})*/

/*app.listen(process.env.PORT)*/