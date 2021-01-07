const router = require('koa-router')()
const controller = require('../controller/address')

router.post('/api/user/address/add', controller.addAddress)
router.get('/api/user/address/get_address/:user_id', controller.getAddress)
router.put('/api/user/address/put_address', controller.putAddress)
router.post('/api/user/address/delete_address', controller.deleteAddress)

module.exports = router
