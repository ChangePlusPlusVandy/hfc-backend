// Imports the Firebase auth 
// Splits the authorization header ("Bearer <token>") 
// into an array and takes the second element, which is the token

const auth = require("../firebase");

const VerifyToken = async (req, res, next) => {
    console.log('VerifyToken function starting')
    try {
        const token = req.headers['authorization'].split(" ")[1];
        console.log(token)
        // Verifies the token and decodes it to get associated user data
        // and stores it in req.user to be accessed by other routes
        const decodeValue = await auth.verifyIdToken(token);
        console.log('decodeValue',decodeValue)
        if (decodeValue) {
            req.user = decodeValue;
            return next();
        }
    } catch (e) {
        return res.status(401).json({ message: "Unauthorized/invalid credentials deez" });
    }
};

module.exports = VerifyToken;