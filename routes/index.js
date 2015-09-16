

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index', { msg: "haha" });
    });

    app.get('/index', function (req, res) {
        res.render('index', { msg: "haha" });
    });

    app.get('/reg', function (req,res){
        res.render('reg');
    });

    
};


