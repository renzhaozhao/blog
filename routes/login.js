module.exports = function(app) {
    
    app.get('/login', function (req,res){
        res.render('login', { title: '登录' });
    });

    app.post("/login", function (req, res) {
        /*var user = {
            username: 'admin',
            password: 'admin'
        }
        if (req.body.username==user.username&&req.body.password==user.password) {
            req.session.user = user;
            res.send(200);
        }else{
            req.session.error = "用户名或密码不正确";
            res.send(404);
        }*/
    });

    app.get('/logout', function(req, res){
        /*req.session.user = null;
        req.session.error = null;
        res.redirect('index');*/
    });

    app.get('/home',function(req,res){
        /*if(req.session.user){
            res.render('home');
        }else{
            req.session.error = "请先登录"
            res.redirect('login');
        }*/
    });
}