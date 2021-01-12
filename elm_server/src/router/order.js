const router = require('koa-router')()
const controller = require('../controller/orders')

router.post('/api/order/addOrder', controller.addOrder)
router.get('/api/order/getAllOrder', controller.getAllOrder)
router.get('/api/order/getOrderByType/:order_type', controller.getOrderType)
router.get('/api/test', controller.test)

module.exports = router
