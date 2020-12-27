const router = require('koa-router')()
const controller = require('../controller/user')

router.post('/api/user/register', controller.register)
router.post('/api/user/login', controller.login)
router.post('/api/user/sign_out', controller.signOut)

module.exports = router
