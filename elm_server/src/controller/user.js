const UserModal = require('../database/mysql')
const {genPassword} = require('../utils/crypto')
const {v4: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const moment = require('moment')
// const verify = Promise.promisify(jwt.verify)
const {secret} = require('../utils/secret')

/**
 * 用户注册
 * @param {*} ctx
 * @param {*} next
 */
exports.register = async (ctx, next) => {
    const {username, password} = ctx.request.body
    const create_at = moment().format()
    let user_id = uuidv4()
    if (username === '' || password === '') {
        ctx.body = {
            code: -1,
            message: '缺少必传参数',
        }
    } else {
        await UserModal.insterUserData([
            user_id,
            username,
            genPassword(password),
            create_at,
        ])
            .then((result) => {
                ctx.body = {
                    statusCode: 200,
                    message: '注册成功',
                    data: {
                        success: true
                    }
                }
            })
            .catch((err) => {
                ctx.body = {
                    code: 500,
                    message: '注册失败',
                }
            })
        await next()
    }
}

/**
 * 用户登录
 * @param {*} ctx
 * @param {*} next
 */
exports.login = async (ctx, next) => {
    const {username, password} = ctx.request.body
    let payload = {username:username,time:new Date().getTime(),timeout:1000*60*60*2}
    let token = jwt.sign(payload,secret)
    if (username === '' || password === '') {
        ctx.body = {
            statusCode: -1,
            message: '缺少必传参数',
        }
    } else {
        await UserModal.findUser(username, genPassword(password))
            .then((result) => {
                ctx.body = {
                    statusCode: 200,
                    message: '登录成功',
                    data: [
                        {
                            success: true,
                            username: result[0].username,
                            user_id: result[0].user_id,
                            create_at: result[0].create_at,
                            token: token,
                            avatar_url: 'http://iph.href.lu/120x120?fg=666666&bg=cccccc'
                        },
                    ],
                }
            })
            .catch((err) => {
                ctx.body = {
                    statusCode: 500,
                    message: `登录失败失败: ${err}`,
                }
            })

        await next()
    }
}

/**
 * 退出登录
 * @param ctx
 * @param next
 */
exports.signOut = async (ctx, next) => {
    let token = ctx.request.header.token
    if (!token) {
        ctx.body = {
            statusCode: -1,
            message: '参数错误'
        }
        return
    }
    ctx.body = {
        statusCode: 200,
        message: '退出成功',
        data: {
            success: true
        }
    }
    await next()
}

