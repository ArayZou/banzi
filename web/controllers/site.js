exports.index = function (req, res, next) {
    // 存DB
    var models = require('../models');
    new models.User({
        userid:'abc',
        password:'123456',
        email:'zrxldl@gmail.com'
    }).save(function(err){
        console.log('new user');
    });
    // 渲染
    res.render('index', {title: 'mantou_index'});
}
