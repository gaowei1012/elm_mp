const mysql = require('mysql')
const {database} = require('../config/index')
const {users, address} = require('./init')

const pool = mysql.createPool({
    host        :   database.HOST,
    user        :   database.USERNAME,
    password    :   database.PASSWORD,
    database    :   database.DATABASE,
    port        :   database.PORT
})

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

// 创建表类
const createTable = (sql) => {
    return query(sql, [])
}

// 创建表
createTable(users)
createTable(address)

/**
 * 用户注册
 * @param val 传入参数
 */
exports.insterUserData = (val) => {
    const _sql = 'insert into users set user_id=?, username=?, password=?, create_at=?;'
    return query(_sql, val)
}

/**
 * 用户登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
exports.findUser = (username, password) => {
    const _sql = `select * from users where username='${username}' and password='${password}';`
    return query(_sql)
} 

/**
 * 查询用户名唯一性
 */
exports.findOnesUser = (username) => {
    const _sql = `select * from users where username='${username}';`
    return query(_sql)
}

/**
 * 添加地址
 * @param {*} val 
 */
exports.insterAddress = (val) => {
    const _sql = 'insert into address set name=?, address_id=?, gender=?, phone=?, address=?, houser_number=?, tag=?, create_at=?, user_id=?;';
    return query(_sql, val)
}

/**
 * 查询用户是否存在
 * @param {string} user_id 用户id
 */
exports.findOnesUserID = (user_id) => {
   const _sql = `select * from users where user_id='${user_id}';`
   return query(_sql)
}

/**
 * 查询用户保存地址
 * 根据用户id查询唯一性
 * @param {string} user_id 用户ID
 */
exports.findOneAddress = (user_id) => {
    const _sql = `select * from address where user_id='${user_id}';`
    return query(_sql)
}

/**
 * 更新地址信息
 * @param {string} user_id 
 * @param {string} name 
 * @param {string} gender 
 * @param {string} phone 
 * @param {string} address 
 * @param {string} houser_number 
 * @param {string} tag 
 */
exports.updateAddress = (user_id, name, gender, phone, address, houser_number, tag) => {
    const _sql = `update address set name='${name}', gender='${gender}', phone='${phone}', address='${address}', houser_number='${houser_number}', tag='${tag}' where user_id='${user_id}';`
    return query(_sql)
}