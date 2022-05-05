const express = require('express')
const cors = require('cors')
const data = require("./data.js")
const app = express()
const mysql = require('mysql')
const { type, json, jsonp } = require('express/lib/response');
const path = require('path');
const { request } = require('http')

/*
app.use(cors())

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
})
//Connexion
/*
const db = mysql.createConnection({
    host: 'mysql22.lwspanel.com',
    user: 'genie1829577_12bkj',
    password: 'Dwwm2022@1984',
    database: 'genie1829577_12bkj'
})
db.connect((err) =>{
    if(err){
        throw err
    }
    console.log('Connecté à MySql');
})
 


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

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });
/*app.listen(5000, () => {
    console.log('serveur sur http://localhost:5000');
})*/

app.listen(process.env.PORT, () => {
    console.log(PORT);
    console.log(process.env.PORT);
});