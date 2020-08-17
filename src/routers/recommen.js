const router = require('koa-router')()
const controller = require('../controller/recommen')

router.post('/api/recommen/insertRecommen', controller.insertRecommen)
router.post('/api/recommen/findRecommen', controller.findRecommen)

module.exports = router
