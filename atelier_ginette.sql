-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 11 juin 2022 à 14:54
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `atelier_ginette`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresse_etudiant`
--

DROP TABLE IF EXISTS `adresse_etudiant`;
CREATE TABLE IF NOT EXISTS `adresse_etudiant` (
  `id_adresse` int(11) NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `code_postal` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_adresse`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `adresse_etudiant`
--

INSERT INTO `adresse_etudiant` (`id_adresse`, `adresse`, `ville`, `code_postal`, `id_user`) VALUES
(1, '2 rue blabla', 'Paris', '75019', 18);

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id_article` int(11) NOT NULL AUTO_INCREMENT,
  `nom_article` varchar(400) NOT NULL,
  `description` text NOT NULL,
  `quantite_article` int(3) NOT NULL,
  `prix_article` varchar(255) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  PRIMARY KEY (`id_article`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id_article`, `nom_article`, `description`, `quantite_article`, `prix_article`, `id_categorie`) VALUES
(3, 'Cotons démaquillants en bambou, cotons lavables zéro déchet certifiés Oeko-Tex ', 'Semainier de cotons démaquillants en bambou et coton, par lot de 7.\r\nLes cotons démaquillants assortis sont tous doux pour votre peau, à utiliser pour vous démaquiller ou pour tous vos soins de visage.\r\nIls vous éviteront l\'utilisation de cotons jetables.\r\nLes finitions sont cousues à la main pour éviter les coutures apparentes.\r\nLes lots sont composés de 7 cotons démaquillants.\r\nFabriqué à la main dans le Bocage Normand.', 1, '18,30', 6),
(4, 'Trousse de toilette berlingot matelassée ', 'Trousse de toilette berlingot matelassée.\r\n\r\nUne joli trousse pour emporter vos affaires de toilette.\r\nLa trousse est matelassée avec de la ouate de coton et un fil coloré pour apporter de la douceur et de la couleur.\r\nL\'intérieur est en tissu nid d\'abeille qui est très absorbant et donc idéal pour conserver vos crèmes, maquillage et autre.\r\n\r\nFabriqué à la main dans le Bocage Normand.', 1, '25', 0),
(5, 'Pochette à savon solide à fleurs en tissu nid d\'abeille ', 'Pochette à savon solide en tissu d\'abeille\r\n\r\nIdéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.\r\nLe tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\r\n\r\nFabriqué à la main dans le Bocage Normand.', 1, '15', 0),
(6, 'Charlottes de saladiers, couvre-plats en tissu fleuri, article de cuisine zéro déchet ', 'Lot de 2 charlottes alimentaires\r\n\r\nVous voulez réduire vos déchets à la cuisine ? Vous pouvez commencer par les couvres-plats en tissu pour remplacer le papier alluminium ou bien le film étirable.\r\nLes charlottes peuvent être utilisées pour recouvrir vos plats contenant des restes de repas et les ranger au frigo.\r\nOu pour couvrir une tarte que vous transportez chez vos amis !\r\n\r\nLes couvres-plats sont lavables en machine à 30 ° mais nous vous conseillons d\'éviter le sèche-linge pour éviter d\'user l\'élastique.\r\n\r\nFabriqué à la main dans le Bocage Normand', 1, '13', 0);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(255) NOT NULL,
  `url_img` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categorie`, `nom_categorie`, `url_img`) VALUES
(1, 'Coussinets de lavande', '../img/coussinets/DSCF0081.jpg'),
(2, 'Pochettes à savon', '../img/pochetteSavon/DSCF0477.jpg'),
(9, 'Guirlandes', '../img/DSCF0018.jpg'),
(8, 'Totes bags', '../img/DSCF9443.jpg'),
(5, 'Trousses de toilette', '../img/trousse-maquillage-artisanat-atelier-ginette-1.jpg'),
(6, 'Cotons démaquillants', '../img/cotons-lavables-bambou-atelier-ginette-1.jpg'),
(7, 'Portes-monnaies', '../img/DSCF9334.jpg'),
(10, 'Trousses molletonnées', '../img/DSCF9915.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `images_prez`
--

DROP TABLE IF EXISTS `images_prez`;
CREATE TABLE IF NOT EXISTS `images_prez` (
  `id_image` int(11) NOT NULL AUTO_INCREMENT,
  `url_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id_image`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `images_prez`
--

INSERT INTO `images_prez` (`id_image`, `url_image`) VALUES
(1, '../img/prez/Atelier ginette artisanat couture fait main.jpg'),
(2, '../img/prez/atelier-ginette-artisanat-couture.jpg'),
(3, '../img/prez/atelier-ginette-créations-couture-artisanat.jpg'),
(4, '../img/prez/créations coutures - artisanat - atelier ginette.jpg'),
(5, '../img/prez/DSCF1894.jpg'),
(6, '../img/prez/DSCF7904.jpg'),
(7, '../img/prez/DSCF7904.jpg'),
(8, '../img/prez/DSCF9966.jpg'),
(9, '../img/prez/IMG_20210719_163446_720_161904234804461.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `url` varchar(400) NOT NULL,
  `id_img` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_img`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`url`, `id_img`) VALUES
('img/trousse-maquillage-artisanat-atelier-ginette-4.jpg', 1),
('img/pochette-savon-solide-atelier-ginette-81.jpg', 2),
('img/DSCF0059.jpg', 6),
('img/trousse-maquillage-artisanat-atelier-ginette-1.jpg', 9);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id_produit` int(11) NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(255) NOT NULL,
  `description_courte` varchar(500) NOT NULL,
  `description_longue` text NOT NULL,
  `url_image` varchar(255) NOT NULL,
  `prix_produit` decimal(2,0) NOT NULL,
  `stock_produit` int(11) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id_produit`, `nom_produit`, `description_courte`, `description_longue`, `url_image`, `prix_produit`, `stock_produit`, `id_categorie`, `nom_categorie`) VALUES
(1, 'Pochette à savon solide en tissu nid d\'abeille', '<p>Pochette à savon solide en tissu d\'abeille</p>\n<br>\n<p>Idéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.</p>\n<br>\n<p>Le tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\nFabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\nTissu 100 % coton.<br>\nA laver à la main délicatement.<br>\nPas de sèche-linge.<br></p>\n<p>DIMENSIONS<br>\nLes pochettes à savon solide font environ 11 cm de hauteur et 12 cm de largeur.<br>\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\n<p>DECLINAISONS<br>\nCe modèle existe en plusieurs coloris.</p> ', '../img/pochetteSavon/DSCF0477.jpg', '13', 1, 2, 'Pochettes à savon'),
(2, 'Pochette à savon solide à fleurs en tissu nid d\'abeille', '<p>Pochette à savon solide en tissu d\'abeille</p>\r\n<br>\r\n<p>Idéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.</p>\r\n<br>\r\n<p>Le tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\r\nFabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\r\nTissu 100 % coton.<br>\r\nA laver à la main délicatement.<br>\r\nPas de sèche-linge.<br></p>\r\n<p>DIMENSIONS<br>\r\nLes pochettes à savon solide font environ 11 cm de hauteur et 12 cm de largeur.<br>\r\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\r\n<p>DECLINAISONS<br>\r\nCe modèle existe en plusieurs coloris.\r\nVous pouvez aussi trouver dans la boutique la trousse de toilette berlingot et les cotons démaquillants assortis</p> \r\n', '../img/pochetteSavon/pochette-savon-solide-atelier-ginette-58.jpg', '13', 3, 2, 'Pochettes à savon'),
(3, 'Pochette à savon solide à fleurs en tissu nid d\'abeille', '<p>Pochette à savon solide en tissu d\'abeille</p>\r\n<br>\r\n<p>Idéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.</p>\r\n<br>\r\n<p>Le tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\r\nFabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\r\nTissu 100 % coton.<br>\r\nA laver à la main délicatement.<br>\r\nPas de sèche-linge.<br></p>\r\n<p>DIMENSIONS<br>\r\nLes pochettes à savon solide font environ 11 cm de hauteur et 12 cm de largeur.<br>\r\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\r\n<p>DECLINAISONS<br>\r\nCe modèle existe en plusieurs coloris.\r\nVous pouvez aussi trouver dans la boutique la trousse de toilette berlingot et les cotons démaquillants assortis</p> \r\n', '../img/pochetteSavon/pochette-savon-solide-atelier-ginette-42.jpg', '13', 1, 2, 'Pochettes à savon'),
(4, 'Pochette à savon solide à fleurs en tissu nid d\'abeille', '<p>Pochette à savon solide en tissu d\'abeille</p>\r\n<br>\r\n<p>Idéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.</p>\r\n<br>\r\n<p>Le tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\r\nFabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\r\nTissu 100 % coton.<br>\r\nA laver à la main délicatement.<br>\r\nPas de sèche-linge.<br></p>\r\n<p>DIMENSIONS<br>\r\nLes pochettes à savon solide font environ 11 cm de hauteur et 12 cm de largeur.<br>\r\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\r\n<p>DECLINAISONS<br>\r\nCe modèle existe en plusieurs coloris.\r\nVous pouvez aussi trouver dans la boutique la trousse de toilette berlingot et les cotons démaquillants assortis</p> \r\n', '../img/pochetteSavon/pochette-savon-solide-atelier-ginette-35.jpg', '13', 1, 2, 'Pochettes à savon'),
(5, 'Pochette à savon solide à fleurs en tissu nid d\'abeille', '<p>Pochette à savon solide en tissu d\'abeille</p>\r\n<br>\r\n<p>Idéal pour ranger vos savons solides au quotidien ou pour les transporter lors de vos petites ou grandes aventures et les protéger.</p>\r\n<br>\r\n<p>Le tissu nid d\'abeille est très absorbant et gardera votre savonnette au sec !\r\nFabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\r\nTissu 100 % coton.<br>\r\nA laver à la main délicatement.<br>\r\nPas de sèche-linge.<br></p>\r\n<p>DIMENSIONS<br>\r\nLes pochettes à savon solide font environ 11 cm de hauteur et 12 cm de largeur.<br>\r\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\r\n<p>DECLINAISONS<br>\r\nCe modèle existe en plusieurs coloris.\r\nVous pouvez aussi trouver dans la boutique la trousse de toilette berlingot et les cotons démaquillants assortis</p> \r\n', '../img/pochetteSavon/pochette-savon-solide-atelier-ginette-4.jpg', '13', 1, 2, 'Pochettes à savon'),
(6, 'Lot de 3 coussinets de lavande, sachets de lavande, carrés de lavande', '<p> Lot de 3 sachets de lavande </p><br>\n<p>A glisser dans vos placards pour parfumer votre linge ou sous votre oreiller pour vous aider à trouver le sommeil (la lavande est bien connue pour ses vertus relaxantes).<br>\nLa lavande est idéal aussi pour repousser les insectes comme les mites.<br>\nIls font aussi de beaux cadeaux ! </p><br>\n<p>Fabriqué à la main dans le Bocage Normand</p>', '<p>COMPOSITION<br>\nCes sachets de lavande sont confectionnés à partir de lavande bleue qui a poussé au coeur de la Drôme provencale.<br>\nSachet 100 % coton.<br>\nNe pas laver.</p><br>\n<p>DIMENSIONS <br>\nLes carrés de lavande font environ 9,5 cm et 21 grammes.<br>\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p><br>\n<p>POUR FAIRE DURER L\'ODEUR :<br>\nLorsque le sachet ne sent plus, n\'hésitez pas à le malaxer pour que les fleurs se mélangent et répandent à nouveau leur odeur ! Avec cette technique vos sachets pourront sentir bons plus longtemps</p>', '../img/coussinets/DSCF0078.jpg', '16', 1, 1, 'Coussinets de lavande'),
(7, 'Lot de 3 coussinets de lavande, sachets de lavande, carrés de lavande', '<p> Lot de 3 sachets de lavande </p><br>\r\n<p>A glisser dans vos placards pour parfumer votre linge ou sous votre oreiller pour vous aider à trouver le sommeil (la lavande est bien connue pour ses vertus relaxantes).<br>\r\nLa lavande est idéal aussi pour repousser les insectes comme les mites.<br>\r\nIls font aussi de beaux cadeaux ! </p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand</p>', '<p>COMPOSITION<br>\r\nCes sachets de lavande sont confectionnés à partir de lavande bleue qui a poussé au coeur de la Drôme provencale.<br>\r\nSachet 100 % coton.<br>\r\nNe pas laver.</p><br>\r\n<p>DIMENSIONS <br>\r\nLes carrés de lavande font environ 9,5 cm et 21 grammes.<br>\r\nA noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p><br>\r\n<p>POUR FAIRE DURER L\'ODEUR :<br>\r\nLorsque le sachet ne sent plus, n\'hésitez pas à le malaxer pour que les fleurs se mélangent et répandent à nouveau leur odeur ! Avec cette technique vos sachets pourront sentir bons plus longtemps</p>', '../img/coussinets/DSCF0081.jpg', '16', 1, 1, 'Coussinets de lavande'),
(8, 'Porte monnaie en tissu, porte carte, petite pochette à pression, coin purse', '<p>Porte monnaie en tissus avec une pression</p><br>\n<p>Idéal pour ranger vos petits sous et billets<br>\nPeut également convenir pour ranger des cartes de visites ou carte bancaire.</p><br>\n<p>Fabriqué à la main dans le Bocage Normand </p>\n', '<p>COMPOSITION<br>\nTissus extérieur et intérieur en coton avec une doublure en thermocollant pour apporter plus de maintien. </p><br>\n<p>DIMENSIONS<br>\nHauteur : 8,5 cm<br>\nLargeur : 10,5 cm</p><br>\n<p>DECLINAISONS <br>\nCe modèle existe en plusieurs coloris, vous pourrez les retrouver dans la boutique.</p><br>\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p>', '../img/porteMonnaie/DSCF9332.jpg', '14', 1, 7, 'Portes-monnaies'),
(9, 'Porte monnaie en tissu, porte carte, petite pochette à pression, coin purse', '<p>Porte monnaie en tissus avec une pression</p><br>\r\n<p>Idéal pour ranger vos petits sous et billets<br>\r\nPeut également convenir pour ranger des cartes de visites ou carte bancaire.</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand </p>\r\n', '<p>COMPOSITION<br>\r\nTissus extérieur et intérieur en coton avec une doublure en thermocollant pour apporter plus de maintien. </p><br>\r\n<p>DIMENSIONS<br>\r\nHauteur : 8,5 cm<br>\r\nLargeur : 10,5 cm</p><br>\r\n<p>DECLINAISONS <br>\r\nCe modèle existe en plusieurs coloris, vous pourrez les retrouver dans la boutique.</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p>', '../img/porteMonnaie/DSCF9539.jpg', '14', 1, 7, 'Portes-monnaies'),
(10, 'Porte monnaie en tissu, porte carte, petite pochette à pression, coin purse', '<p>Porte monnaie en tissus avec une pression</p><br>\r\n<p>Idéal pour ranger vos petits sous et billets<br>\r\nPeut également convenir pour ranger des cartes de visites ou carte bancaire.</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand </p>\r\n', '<p>COMPOSITION<br>\r\nTissus extérieur et intérieur en coton avec une doublure en thermocollant pour apporter plus de maintien. </p><br>\r\n<p>DIMENSIONS<br>\r\nHauteur : 8,5 cm<br>\r\nLargeur : 10,5 cm</p><br>\r\n<p>DECLINAISONS <br>\r\nCe modèle existe en plusieurs coloris, vous pourrez les retrouver dans la boutique.</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p>', '../img/porteMonnaie/DSCF9304.jpg', '14', 1, 7, 'Portes-monnaies'),
(11, 'Porte monnaie en tissu, porte carte, petite pochette à pression, coin purse', '<p>Porte monnaie en tissus avec une pression</p><br>\r\n<p>Idéal pour ranger vos petits sous et billets<br>\r\nPeut également convenir pour ranger des cartes de visites ou carte bancaire.</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand </p>\r\n', '<p>COMPOSITION<br>\r\nTissus extérieur et intérieur en coton avec une doublure en thermocollant pour apporter plus de maintien. </p><br>\r\n<p>DIMENSIONS<br>\r\nHauteur : 8,5 cm<br>\r\nLargeur : 10,5 cm</p><br>\r\n<p>DECLINAISONS <br>\r\nCe modèle existe en plusieurs coloris, vous pourrez les retrouver dans la boutique.</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement. </p>', '../img/porteMonnaie/DSCF9545.jpg', '14', 1, 7, 'Portes-monnaies'),
(12, 'Guirlande de 8 fanions en tissu fleuri, décoration murale en tissu\n', '<p>Guirlande de 8 fanions en tissu</p><br>\n<p>Pour décorer un coin bébé, une chambre de petits ou grands. C\'est aussi une chouette décoration réutilisable pour un anniversaire ou un mariage.</p><br>\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\nTissu coton</p><br>\n<p>DIMENSIONS<br>\nLa guirlande fait environ 2m de longueur et les fanions mesurent 13 cm.</p><br>\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\n', '../img/guirlandes/DSCF0018.jpg', '29', 1, 9, 'Guirlandes'),
(13, 'Guirlande de croissants en tissu fleuri, décoration murale réutilisable\n', '<p>Guirlande de 8 croissants en tissu</p><br>\n<p>Pour décorer un coin bébé, une chambre de petits ou grands. C\'est aussi une chouette décoration réutilisable pour un anniversaire ou un mariage.</p><br>\n<p>Les guirlandes de croissants sont fabriqués à partir de chutes de tissu. A l\'Atelier, j\'ai à coeur de réutiliser au maximum et d\'éviter les pertes.</p><br>\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\nTissu coton</p><br>\n<p>DIMENSIONS<br>\nLa guirlande fait environ 2m de longueur.</p><br>\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\n', '../img/guirlandes/guirlande-croissants-zéro-déchet-atelier-ginette-10.jpg', '27', 1, 9, 'Guirlandes'),
(14, 'Guirlande de croissants en tissu fleuri, décoration murale réutilisable\r\n', '<p>Guirlande de 8 croissants en tissu</p><br>\r\n<p>Pour décorer un coin bébé, une chambre de petits ou grands. C\'est aussi une chouette décoration réutilisable pour un anniversaire ou un mariage.</p><br>\r\n<p>Les guirlandes de croissants sont fabriqués à partir de chutes de tissu. A l\'Atelier, j\'ai à coeur de réutiliser au maximum et d\'éviter les pertes.</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>COMPOSITION<br>\r\nTissu coton</p><br>\r\n<p>DIMENSIONS<br>\r\nLa guirlande fait environ 2m de longueur.</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>\r\n', '../img/guirlandes/guirlande-de-croissants-atelier-ginette-15.jpg', '27', 1, 9, 'Guirlandes'),
(15, 'Trousse de toilette berlingot matelassée', '<p>Trousse de toilette berlingot matelassée</p><br>\n<p>Une joli trousse pour emporter vos affaires de toilette.<br>\nLa trousse est matelassée avec de la ouate de coton et un fil coloré pour apporter de la douceur et de la couleur.</p><br>\n<p>L\'intérieur est en tissu nid d\'abeille qui est très absorbant et donc idéal pour conserver vos crèmes, maquillage et autre</p><br>\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>DECLINAISONS :<br>\nCe modèle de trousse existe en plusieurs coloris, vous pourrez les retrouver dans la boutique</p><br>\n<p>COMPOSITION<br>\n- La trousse :<br>\nTissu intérieur en coton nid d\'abeille, tissu extérieur en coton<br>\nDoublure en ouate de coton<br>\nZip en polyester<br>\nA laver à la main délicatement<br>\nPas de sèche-linge</p><br>\n<p>DIMENSIONS<br>\nLes trousses de toilette mesurent 15 cm de hauteur et 24,5 cm de largeur</p><br>\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>', '../img/trousseToilette/DSCF0352.jpg', '25', 1, 5, 'Trousses de toilette'),
(16, 'Trousse de toilette berlingot matelassée', '<p>Trousse de toilette berlingot matelassée</p><br>\r\n<p>Une joli trousse pour emporter vos affaires de toilette.<br>\r\nLa trousse est matelassée avec de la ouate de coton et un fil coloré pour apporter de la douceur et de la couleur.</p><br>\r\n<p>L\'intérieur est en tissu nid d\'abeille qui est très absorbant et donc idéal pour conserver vos crèmes, maquillage et autre</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>DECLINAISONS :<br>\r\nCe modèle de trousse existe en plusieurs coloris, vous pourrez les retrouver dans la boutique</p><br>\r\n<p>COMPOSITION<br>\r\n- La trousse :<br>\r\nTissu intérieur en coton nid d\'abeille, tissu extérieur en coton<br>\r\nDoublure en ouate de coton<br>\r\nZip en polyester<br>\r\nA laver à la main délicatement<br>\r\nPas de sèche-linge</p><br>\r\n<p>DIMENSIONS<br>\r\nLes trousses de toilette mesurent 15 cm de hauteur et 24,5 cm de largeur</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>', '../img/trousseToilette/trousse-maquillage-artisanat-atelier-ginette-1.jpg', '25', 1, 5, 'Trousses de toilette'),
(17, 'Trousse de toilette berlingot matelassée', '<p>Trousse de toilette berlingot matelassée</p><br>\r\n<p>Une joli trousse pour emporter vos affaires de toilette.<br>\r\nLa trousse est matelassée avec de la ouate de coton et un fil coloré pour apporter de la douceur et de la couleur.</p><br>\r\n<p>L\'intérieur est en tissu nid d\'abeille qui est très absorbant et donc idéal pour conserver vos crèmes, maquillage et autre</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>DECLINAISONS :<br>\r\nCe modèle de trousse existe en plusieurs coloris, vous pourrez les retrouver dans la boutique</p><br>\r\n<p>COMPOSITION<br>\r\n- La trousse :<br>\r\nTissu intérieur en coton nid d\'abeille, tissu extérieur en coton<br>\r\nDoublure en ouate de coton<br>\r\nZip en polyester<br>\r\nA laver à la main délicatement<br>\r\nPas de sèche-linge</p><br>\r\n<p>DIMENSIONS<br>\r\nLes trousses de toilette mesurent 15 cm de hauteur et 24,5 cm de largeur</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>', '../img/trousseToilette/trousse-de-toilette-artisanat-atelier-ginette-2.jpg', '25', 1, 5, 'Trousses de toilette'),
(18, 'Trousse de toilette berlingot matelassée', '<p>Trousse de toilette berlingot matelassée</p><br>\r\n<p>Une joli trousse pour emporter vos affaires de toilette.<br>\r\nLa trousse est matelassée avec de la ouate de coton et un fil coloré pour apporter de la douceur et de la couleur.</p><br>\r\n<p>L\'intérieur est en tissu nid d\'abeille qui est très absorbant et donc idéal pour conserver vos crèmes, maquillage et autre</p><br>\r\n<p>Fabriqué à la main dans le Bocage Normand.</p>', '<p>DECLINAISONS :<br>\r\nCe modèle de trousse existe en plusieurs coloris, vous pourrez les retrouver dans la boutique</p><br>\r\n<p>COMPOSITION<br>\r\n- La trousse :<br>\r\nTissu intérieur en coton nid d\'abeille, tissu extérieur en coton<br>\r\nDoublure en ouate de coton<br>\r\nZip en polyester<br>\r\nA laver à la main délicatement<br>\r\nPas de sèche-linge</p><br>\r\n<p>DIMENSIONS<br>\r\nLes trousses de toilette mesurent 15 cm de hauteur et 24,5 cm de largeur</p><br>\r\n<p>A noter que tous les produits de l\'Atelier Ginette sont artisanaux, tout est fabriqué à la main, les dimensions peuvent donc varier légèrement.</p>', '../img/trousseToilette/trousse-de-toilette-artisanat-atelier-ginette-54.jpg', '25', 1, 5, 'Trousses de toilette');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(3) NOT NULL AUTO_INCREMENT,
  `prenom_user` varchar(500) NOT NULL,
  `nom_user` varchar(500) NOT NULL,
  `mail_user` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `prenom_user`, `nom_user`, `mail_user`, `password`) VALUES
(1, 'quentin', 'clavier', 'mail@mymail.com', '1234'),
(2, 'maxime', 'belleuvre', 'mail2@my.com', '1234'),
(3, 'mathieu', '', '', ''),
(4, 'q', '', '', ''),
(5, ':prenom_user', '', '', ''),
(6, ':prenom_user', '', '', ''),
(7, 'Bidon', '', '', ''),
(8, 'Alexande', 'Raguenes', 'lol@lol.com', '1234'),
(9, 'allo', 'allo', 'allo@aol.fr', '1234'),
(10, 'bil', 'boule', 'a', 'u6WPs2PeYeL54Qm'),
(11, 'Bill', 'Boule', 'allo@aol.fr', '1234'),
(12, 'Bill', 'Boule', 'allo@aol.fr', '1234'),
(13, 'dsfsf', 'ffff', 'sqq', '1234'),
(14, 'dsfsf', 'ffff', 'sqq', '1234'),
(15, 'Alex', 'et', 'lol@lol.Com', '1234'),
(16, 'quentin', 'dsdsf', 'dsfsdf', '1234'),
(17, 'Alex', 'sdqs', 'lol@lol.Com', '1234'),
(18, 'Alex', 'Blop', 'lol@lol.com', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
