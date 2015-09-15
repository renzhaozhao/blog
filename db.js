/**
数据库端处理
*/


var mmysql = require('mysql');
//打开数据库连接
function openCon(){
    var con= mmysql.createConnection({
        host:'localhost',
        user:'root',
        password:'3251325',
        database:'blog'
    });
    return con;
}

/**********************注册数据**********************************/
exports.signupDb = function(sInfo, res){
    var sql = "INSERT INTO user set name=?,password=?,email=?",
        value = [sInfo.name,sInfo.password,sInfo.email];
    openCon().query(sql,value, function(error, results){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            openCon().end();
            //===将jSon转换为字符串传输
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
    });
};

/**********************展示数据**********************************/
exports.showDb = function(sInfo, res){
    var sql = "select * from test where name like ?";
    openCon().query(sql,sInfo, function(error, results){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            openCon().end();
            //===将jSon转换为字符串传输
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
    });
};

/**********************查询数据**********************************/
exports.searchDb = function(sInfo, res){
    var sql = 'select name from test where name like ?';
    openCon().query(sql, ['%'+sInfo+'%'], function(error, results){
        if(error){
            console.log(error);
            res.end();
        }
        else{
            openCon().end();
            //===将jSon转换为字符串传输
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
    });
};

