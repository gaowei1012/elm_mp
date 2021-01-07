const AddressUtil = require('../database/mysql')
const moment = require('moment')
const {v4: uuidv4} = require('uuid')

/**
 * 添加用户地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.addAddress = async (ctx, next) => {
    const {name, address, phone, tag, gender, houser_number, user_id} = ctx.request.body;
    const create_at = moment().format()
    const address_id = uuidv4()
    if (name === '' || address === '' || phone === '' || tag === '' || gender === '' || houser_number === '' || user_id === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    await AddressUtil.insterAddress([name, address_id, gender, phone, address, houser_number, tag, create_at, user_id])
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
    const {user_id} = ctx.request.params
    if (user_id === undefined || user_id === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    let result = await AddressUtil.findOnesUserID(user_id)
    if (result && result[0]) {
        await AddressUtil.findOneAddress(user_id)
            .then(result => {
                ctx.body = {
                    statusCode: 200,
                    message: '获取成功',
                    data: {
                        success: true,
                        address: result
                    }
                }
            }).catch(err => {
                ctx.body = {
                    statusCode: -2,
                    message: `获取失败，${err}`
                }
            })
    } else {
        ctx.body = {
            statusCode: 200,
            message: '获取成功',
            data: {
                success: false,
                message: '查询用户失败，用户不存在'
            } 
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
    const {address_id, user_id, name, address, gender, phone, tag, houser_number} = ctx.request.body
    // if ((address_id && name && address && gender && phone && tag && houser_number)) {
    //     ctx.body = {
    //         statusCode: -2,
    //         message: '参数不正确,少传参数'
    //     }
    //     return 
    if (address_id === '' || user_id === '' || name === '' || address === '' || gender === '' || phone === '' || tag === '' || houser_number === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    let result = await AddressUtil.findOnesUserID(user_id)
    if (result && result[0]) {
        await AddressUtil.updateAddress(address_id, name, gender, phone, address, houser_number, tag)
            .then(result => {
                ctx.body = {
                    statusCode: 200,
                    message: '修改成功',
                    data: {
                        success: true
                    }
                } 
            })
            .catch(err => {
                ctx.body = {
                    statusCode: -1,
                    message: `修改失败，${err}`,
                } 
            })
    } else {
        ctx.body = {
            statusCode: 200,
            message: 'OK',
            data: {
                success: false,
                message: '查询用户失败，用户不存在'
            } 
        }
    }
    
    await next()
}

/**
 * 删除地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.deleteAddress = async (ctx, next) => {
    const {user_id} = ctx.request.params
    if (user_id === undefined || user_id === '') {
        ctx.body = {
            statusCode: -1,
            message: '必传参数不能为空'
        }
        return
    }
    const result = await AddressUtil.findOnesUserID(user_id)
    if (result && result[0]) {
        await AddressUtil.deleteOneAddress(user_id)
            .then(result => {
                ctx.body = {
                    statusCode: 200,
                    message: '删除成功',
                    data: {
                        success: true
                    }
                }
            })
            .catch(err => {
                ctx.body = {
                    statusCode: -1,
                    message: `删除失败，${err}`
                }
            })
    } else {
        ctx.body = {
            statusCode: 200,
            message: 'OK',
            data: {
                success: false,
                message: '查询用户失败，用户不存在'
            } 
        }
    }

    await next()
}
