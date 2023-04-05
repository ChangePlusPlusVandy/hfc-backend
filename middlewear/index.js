const admin = require('../firebase');


// Decodes the token passed in from the headers in the request and validates it against our firebase store of users
class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authoriztion?.split(' ')[1];
		console.log(token);
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				req.user = decodeValue;
				return next();
			}
			return res.json({ message: 'Un authorize' });
		} catch (e) {
			return res.json({ message: 'Internal Error' });
		}
	}
}

module.exports = new Middleware();