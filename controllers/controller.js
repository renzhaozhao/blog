/**
 *控制端这里用 MVC模式
 */
var db = require("../db.js");
var url = require("url");
var qs = require("querystring");
 

/****************************展示数据******************************/
exports.signupFun = function(req, res){
    var sInfo = qs.parse(url.parse(req.url).query);
    db.signupDb(sInfo, res);
}