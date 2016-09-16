module.exports= function () {
	var models= require('./models');
	var controllers= require('./controllers');
	
	return {
		models: models,
		controllers: controllers
	}
};