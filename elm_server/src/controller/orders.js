const OrderModal = require('../database/mysql')
const {v4: uuidv4} = require('uuid')
const moment = require('moment')

/**
 * 添加订单
 * @param {*} ctx 
 * @param {*} next 
 */
exports.addOrder = async (ctx, next) => {
    const {order_title,delivery_status,order_price,order_picture_url,shop_name,order_type} = ctx.request.body
    console.log(ctx.request.body)
    if (order_title === '' || delivery_status === '' || order_picture_url === '' || order_price === '' || shop_name === '' || order_type === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    const order_id = uuidv4()
    const create_at = moment().format()
    await OrderModal.insterOrder([order_id,order_title,delivery_status,order_price,order_picture_url,shop_name,order_type,create_at])
        .then(result => {
            ctx.body = {
                code: 200,
                statusCode: 1,
                message: '添加成功',
                data: {
                    success: true
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                statusCode: -1,
                message: '添加失败',
                data: {
                    success: false,
                    data: `err:${err}`
                }
            }
        })
    await next()
}

/**
 * 获取全部订单
 * @param {*} ctx 
 * @param {*} next 
 */
exports.getAllOrder = async (ctx, next) => {
    await OrderModal.findAllOrder()
        .then(result => {
            ctx.body = {
                code: 200,
                statusCode: 1,
                message: '获取订单成功',
                data: {
                    success: true,
                    data: result
                }
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                statusCode: -1,
                message: '获取订单失败',
                data: {
                    success: false,
                    data: err
                }
            }
        })

    await next()
}

/**
 * 根据订单状态获取不同类型订单
 * @param {*} ctx 
 * @param {*} next 
 */
exports.getOrderType = async (ctx, next) => {
    const {order_type} = ctx.request.params
    console.log(order_type)
    if (order_type === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    } else {
        await OrderModal.findOneOrderByType(order_type)
            .then(result => {
                ctx.body = {
                    code: 200,
                    statusCode: 1,
                    message: '获取订单成功',
                    data: {
                        success: true,
                        data: result
                    }
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 500,
                    statusCode: -1,
                    message: '获取订单失败',
                    data: {
                        success: false,
                        data: err
                    }
                }
            })
    }
    await next()
}