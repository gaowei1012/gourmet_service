const router = require('koa-router')()
const controller = require('../controller/user')

router.get('/api/user/getUserInfo', controller.getUserInfo)

module.exports = router