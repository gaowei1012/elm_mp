const mysql = require('mysql')
const {database} = require('../config/index')
const {users, address, products, orders } = require('./init')

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
createTable(products)
createTable(orders)

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
exports.updateAddress = (address_id, name, gender, phone, address, houser_number, tag) => {
    const _sql = `update address set name='${name}', gender='${gender}', phone='${phone}', address='${address}', houser_number='${houser_number}', tag='${tag}' where address_id='${address_id}';`
    return query(_sql)
}

/**
 * 删除地址
 * @param {*} user_id 
 */
exports.deleteOneAddress = (address_id) => {
    const _sql = `delete from address where address_id='${address_id}';`
    return query(_sql)
}

/**
 * 插入列表
 * @param {*} val 
 */
exports.insterProduct = (val) => {
    const _sql = 'insert into products set product_id=?, product_title=?, price=?, score=?, product_picture_url=?, monthly_sales=?, delivery_distance=?, delivery_fee=?, price_detail=?, create_at=?;'
    return query(_sql, val)
}

/**
 * 获取商品列表
 */
exports.findProductList = () => {
    const _sql = 'select * from products LIMIT 10;'
    return query(_sql)
}


/**
 * 插入订单信息
 * @param {*} val 
 */
exports.insterOrder = (val) => {
    const _sql = 'insert into orders set order_id=?, order_title=?, delivery_status=?, order_price=?, order_picture_url=?, shop_name=?, order_type=?, create_at=?;'
    return query(_sql, val)
}

/**
 * 获取所有订单
 */
exports.findAllOrder = () => {
    const _sql = 'select * from orders LIMIT 20;'
    return query(_sql)
}

/**
 * 根据订单类型获取
 * @param order_type 订单类型
 */
exports.findOneOrderByType = (order_type) => {
    const _sql = `select * from orders where order_type='${order_type}' LIMIT 20;`
    return query(_sql)
}
