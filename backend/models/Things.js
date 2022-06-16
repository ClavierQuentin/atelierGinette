const mongoose = require('mongoose');

const thingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom_produit: {type: String, required: true},
    description_courte : {type: String, required: true},
    description_longue: {type: String, required: true},
    url_image:{type: String, required: true},
    prix_produit: {type: Number, required: true},
    stock_produit: {type: Number, required: true},
    id_categorie:{type: Number, required: true},
    nom_categorie: {type: String, required: true},
    id_produit: {type: Number, required: true}
});

module.exports = mongoose.model('Things', thingsSchema);