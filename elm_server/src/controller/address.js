

/**
 * 添加用户地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.add = async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: '添加成功',
        data: {

        }
    }

    await next()
}


/**
 * 获取用户地址
 * @param {*} ctx 
 * @param {*} next 
 */
exports.getAddress = async (ctx, next) => {
    ctx.body = {
        code: 200,
        message: '获取成功',
        data: {}
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
        code: 200,
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
        code: 200,
        message: '删除成功',
        data: {}
    }

    await next()
}
