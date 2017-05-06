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
    db.any('select * from cartitems c join products p on cast(c.product_id as integer)=p.id where c.user_id=\'U101\'')
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

function getSingleProduct(req,res,next) {
    var productId = req.params.id;
    db.one('select * from products where id = $1', productId)
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function createCartitem(req, res, next) {
    db.none('insert into cartitems(user_id,product_id) values(\'U101\', $1)', req.body.productId)
        .then(function () {
            res.status(200).json({});

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


function createCartCoupon(req, res, next) {
    db.none('insert into cartcoupons(user_id,coupon_id) values(\'U101\', $1)', req.body.couponId)
        .then(function () {
            res.status(200).json({});

        })
        .catch(function (err) {
            return next(err);
        });
}

function removeCartCoupon(req, res, next) {
    var cartCouponId = parseInt(req.params.id);
    db.result('delete from cartcoupons where id = $1', cartCouponId)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200);

            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}


function getAllCartCoupons(req,res,next) {
    var productId = req.params.id;
    db.any('select * from cartcoupons cc join coupons c on cast(cc.coupon_id as integer)=c.id where id = \'U101\'')
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            console.log(err);
            return next(err);
        });
}

function getCartWithCoupons(req, res, next) {
  db.any('select * from cartcoupons cc join coupons c on cast(cc.coupon_id as integer)=c.id where id = \'U101\'')
      .then(function(data) {
        constructCartAndSendCart(data, req, res, next);
      })
      .catch(function (err) {
          console.log(err);
          return next(err);
      });
}

function constructCartAndSendCart(coupons, req, res, next) {
  db.any('select * from cartitems c join products p on cast(c.product_id as integer)=p.id where c.user_id=\'U101\'')
      .then(function (data) {
        var totalPrice = 0;
        for(var i=0; i< data.length; i++) {
          totalPrice += data.price;
        }
        for(var i=0; i< coupons.length; i++) {
          totalPrice -= coupons.discount;
        }
        res.status(200)
            .json({
              products: data,
              coupons: coupons,
              total: total
            });
      })
      .catch(function (err) {
          console.log(err);
          return next(err);
      });
}

module.exports = {
    getAllCartitems: getAllCartitems,
    getSingleCartitem: getSingleCartitem,
    createCartitem: createCartitem,
    removeCartitem: removeCartitem,
    getSingleProduct: getSingleProduct,
    createCartCoupon: createCartCoupon,
    removeCartCoupon: removeCartCoupon,
    getAllCartCoupons: getAllCartCoupons,
    getCartWithCoupons: getCartWithCoupons
};
