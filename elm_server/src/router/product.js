const router = require('koa-router')()
const controller = require('../controller/product')

router.post('/api/product/addProductList', controller.addProductList)
router.get('/api/product/getProductList', controller.getProductList)

module.exports = router
