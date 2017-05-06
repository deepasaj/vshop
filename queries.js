var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/shop';
var db = pgp(connectionString);

// add query functions

function getAllCartitems(req,res,next){
    db.any('select * from cartitems')
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
    db.none('insert into cartitems(product_id) values($1)', req.body.productId)
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