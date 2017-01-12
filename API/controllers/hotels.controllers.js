//you can require json files!
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
	console.log('GET the hotels');
	res
		.status(200)
		.json(hotelData);//returns json object
};