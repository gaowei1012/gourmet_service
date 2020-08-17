const router = require('koa-router')()
const controller = require('../controller/shops')

router.post('/api/shops/insertShop', controller.insertShop)
router.post('/api/shops/findShopByType', controller.findShopByType)

module.exports = router
