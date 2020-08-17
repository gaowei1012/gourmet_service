const router = require('koa-router')()
const controller = require('../controller/address')

router.post('/api/address/insertAddress', controller.insertAddress)
router.post('/api/address/getAddress', controller.getAddress)

module.exports = router
