const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccount.json");
// TODO: change to JS object with .env variables
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
