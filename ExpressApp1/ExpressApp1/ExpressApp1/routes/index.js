
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Home', year: new Date().getFullYear() });
};

exports.profile = function (req, res) {
    res.render('profile', { title: 'My Profile', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.favorite = function (req, res) {
    res.render('favorite', { title: 'My Favorite Recipes', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.login = function (req, res) {
    res.render('login', { title: 'Login', year: new Date().getFullYear()});
};