var User = require('../models/user.js'),
        passport = require('passpost'),
        facebookStrategy = require('passpost-facebook').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if (err || !user) {
            return done(err, null);
        }
        done(null, user);
    });
});

module.exports = function(app, options) {
    if (!options.successRedirect) {
        options.successRedirect = '/account';
    }
    if (!options.failureRedirect) {
        options.failureRedirect = '/login';
    }
    
    return {
        init: function() {},
        
        registerRoutes: function() {},
    };
};


