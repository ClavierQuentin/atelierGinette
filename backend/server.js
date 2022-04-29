const express = require('express')
const cors = require('cors')
const data = require("./data.js")
const app = express()
const mysql = require('mysql')

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
    let sql = `SELECT * FROM categorie`
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