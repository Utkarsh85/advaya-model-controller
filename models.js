var models= require('require-all')({
  dirname     :  require("path").resolve('./api/models'),
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});


module.exports=Object.keys(models)
.map(function (key) {
	var obj={schema: models[key]};
	obj.modelName=key;
	return obj;
})
.reduce(function (modelObj,model) {
	modelObj[model.modelName]= model;
	return modelObj;
},{});

