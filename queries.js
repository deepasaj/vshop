var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://ipkmcurpyfkqgg:cd306b1f346325f858128e17e167d3f9850741d924ebd52550a445b78ce162cd@ec2-23-23-223-2.compute-1.amazonaws.com:5432/ddbeeidvafm7om';
var db = pgp(connectionString);

// add query functions

function getAllCartitems(req,res,next){
    db.any('select * from cartitems where user_id=\'U101\'')
        .then(function (data) {
            res.status(200)
                .json( data);
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getSingleCartitem(req, res, next) {
    var cartItemId = parseInt(req.params.id);
    db.one('select * from cartitems where id = $1', cartItemId)
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
}

function createCartitem(req, res, next) {
    db.none('insert into cartitems(user_id,product_id) values(\'U101\', $1)', 'U101', req.body.productId)
        .then(function () {
            res.status(200).json();

        })
        .catch(function (err) {
            return next(err);
        });
}

function removeCartitem(req, res, next) {
    var cartItemId = parseInt(req.params.id);
    db.result('delete from cartitems where id = $1', cartItemId)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200);

            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllCartitems: getAllCartitems,
    getSingleCartitem: getSingleCartitem,
    createCartitem: createCartitem,
    removeCartitem: removeCartitem
};