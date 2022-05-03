const express = require('express')
const cors = require('cors')
const data = require("./data.js")
const app = express()
const mysql = require('mysql')
const { type, json, jsonp } = require('express/lib/response');


app.use(cors())

//Connexion

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'atelier_ginette',

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
})
app.listen(5000, () => {
    console.log('serveur sur http://localhost:5000');
})