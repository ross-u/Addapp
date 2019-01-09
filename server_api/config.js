const dbUrl = 'mongodb://localhost:27017';
const dbName = 'soloproject-notefy';
const URI = `${dbUrl}/${dbName}`; // concat the URL and Database name

const PORT = 3000;

module.exports = { dbUrl, dbName, PORT, URI };