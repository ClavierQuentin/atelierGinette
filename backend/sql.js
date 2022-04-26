exports.ddb_article = function(mySql){
    const ddb_article = mySql.createBdd({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'atelier_ginette',
        charset  : 'UTF8_UNICODE_CI',
        multipleStatements: true
    });
    return ddb_article;
}