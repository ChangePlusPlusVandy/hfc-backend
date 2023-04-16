// const admin = require("firebase-admin");
// const serviceAccount = require("./ServiceAccount.json");
// const {getAuth} = require('firebase-admin/auth')

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });

// module.exports = admin;
// TODO: figure out the difference between above and below
const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("./ServiceAccount.json");

const app = initializeApp({
    credential: cert(serviceAccount),
});

const auth = getAuth(app);

module.exports = auth;
