const AddressUtil = require('../database/mysql')
const moment = require('moment')
const {v4: uuidv4} = require('uuid')

/**
 * 添加用户地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.addAddress = async (ctx, next) => {
    const {name, address, phone, tag, gender, houser_number} = ctx.request.body;
    const create_at = moment().format()
    const address_id = uuidv4()
    if (name === '' || address === '' || phone === '' || tag === '' || gender === '' || houser_number === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    await AddressUtil.insterAddress([name, address_id, gender, phone, address, houser_number, tag, create_at])
        .then(result => {
            ctx.body = {
                statusCode: 200,
                message: '添加地址成功',
                data: {
                    success: true
                }
            }
        })
        .catch(err => {
            ctx.body = {
                statusCode: -2,
                message: JSON.stringify(err)
            }
        })

    await next()
}


/**
 * 获取用户地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.getAddress = async (ctx, next) => {

    ctx.body = {
        statusCode: 200,
        message: '获取成功',
        data: {
            success: true,
        }
    }

    await next()
}

/**
 * 修改地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.putAddress = async (ctx, next) => {
    ctx.body = {
        statusCode: 200,
        message: '修改成功',
        data: {}
    }

    await next()
}

/**
 * 删除地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.deleteAddress = async (ctx, next) => {
    ctx.body = {
        statusCode: 200,
        message: '删除成功',
        data: {}
    }

    await next()
}
