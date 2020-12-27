const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const verify = Promise.promisifyAll(jwt.verify)
const {secret} = require('./secret')

const check = async (token, ctx, next) => {
    let payload = await verify(token,secret)
    let {time, timeout} = payload
    let data = new Date().getTime()

    if (data - time <= timeout) {
        await next()
    } else {
        ctx.body = {
            statusCode: -2,
            message: 'token 过期，请重新登录!'
        }
    }
}

module.exports = check
