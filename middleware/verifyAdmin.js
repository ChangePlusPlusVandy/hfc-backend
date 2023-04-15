// Imports the Firebase auth 
// Splits the authorization header ("Bearer <token>") 
// into an array and takes the second element, which is the token

const auth = require("../firebase");

const verifyAdmin = async (req, res, next) => {
    console.log('VerifyAdmin function starting')
    try {
        const token = req.headers['authorization'].split(" ")[1];
        console.log(token)
        // Verifies the token and decodes it to get associated user data
        // and stores it in req.user to be accessed by other routes
        const decodeValue = await auth.verifyIdToken(token);
        console.log('decodeValue',decodeValue)
        if (decodeValue) {
            req.user = decodeValue;
            const fbUID = decodeValue.uid;
            const isAdmin = await checkAdminStatus(fbUID,token);
            if (isAdmin) {
                next();
            } else {
                return res.status(401).json({ message: "User is not an admin" });
            }
        }
    } catch (e) {
        return res.status(401).json({ message: "Unauthorized/invalid credentials" });
    }
};

const checkAdminStatus = async (uid,token) => {
    try {
        const res = await fetch(
            `http://localhost:3000/users?firebaseUID=${uid}`
        ,{headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }});
        const mongoUser = await res.json();
        return parseInt(mongoUser[0].level) == 3;
    } catch (err) {
        console.log(err);
    }
    
}

module.exports = verifyAdmin;