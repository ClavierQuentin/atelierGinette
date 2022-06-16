const express = require('express');
const res = require('express/lib/response');
const data = require("./data.js");
const mongoose = require('mongoose');
const Things = require('./models/Things');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'atelier_ginette',
    charset  : 'UTF8_UNICODE_CI',
    multipleStatements: true
})
db.connect((err) =>{
    if(err){
        throw err
    }
    console.log('Connecté à MySql');
}) 



/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://c_quentin:Kosin4iles@cluster0.w8hseq3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = "AtelierGinette";
async function run(){
    try{
        await client.connect();
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log(err.stack);
    }
    finally {
       await client.close();
   }
};
run().catch(console.dir);*/
/*
mongoose.connect('mongodb+srv://c_quentin:Koksin4iles@cluster0.w8hseq3.mongodb.net/AtelierGinette?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion à MongoDB :'));
db.once('open', function (){
    console.log('Connecté à Mongoose Server');
})  */
/*app.use((req, res, next) => {
    console.log('requete reçue');
    next();
});

app.use((req, res, next) =>{
    res.json({message : "Bonne requête"});
    next();
});
app.use((req, res) => {
    console.log("Réponse envoyée avec succès");
});*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/produit/', (req, res) => {
    let sql = `SELECT * FROM categories`
    db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
});
    

app.get("/pages/about", (req,res) => {
    let sql = `SELECT * FROM images_prez`;
    db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
});
app.get("/pages/categories/:id", (req, res) => {
    let sql = `SELECT * FROM produits WHERE id_categorie = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result);
    })
})

app.get("/pages/produit/:id", (req,res) => {
    let sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
    })
});
app.get("/pages/panier/:id", (req,res) => {
    let sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
    })
})
module.exports = app;