const tokenService = require('../services/token-service');

module.exports = function (socket, next) {
	if (tokenService.validateAccessToken(socket[1])) {
		next();
	}
	return false;
};
