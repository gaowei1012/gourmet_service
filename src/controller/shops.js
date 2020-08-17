const ShopModal = require("../db/mysql");

// 根据商品类型获取
exports.findShopByType = async (ctx, next) => {
  let { type } = ctx.request.body;
  if (type !== null) {
    await ShopModal.findShopByType(type)
      .then((ret) => {
        ctx.body = {
          code: 1,
          message: ret,
        };
      })
      .catch((err) => {
        ctx.body = {
          code: -1,
          message: err,
        };
      });
  } else {
    ctx.body = "字段非法";
  }
  await next();
};

exports.insertShop = async (ctx, next) => {
  let { shop_name, type, shop_url } = ctx.request.body;
  let create_at = new Date();
  if ((shop_name && type && shop_url) !== null) {
    await ShopModal.insertShops([shop_name, type, shop_url, create_at])
      .then((ret) => {
        ctx.body = {
          code: 1,
          message: ret,
        };
      })
      .catch((err) => {
        ctx.body = {
          code: -1,
          message: err,
        };
      });
  } else {
    ctx.body = "字段非法";
  }
  await next();
};
