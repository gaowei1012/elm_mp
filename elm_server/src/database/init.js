const users = `
    create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        user_id VARCHAR(100) NOT NULL COMMENT '用户id',
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const address = `
    create table if not exists address(
        id INT NOT NULL AUTO_INCREMENT,
        user_id VARCHAR(100) NOT NULL COMMENT '用户id',
        address_id VARCHAR(100) NOT NULL COMMENT '地址id',
        name VARCHAR(100) NOT NULL COMMENT '收货人姓名',
        gender VARCHAR(100) NOT NULL COMMENT '性别',
        phone VARCHAR(100) NOT NULL COMMENT '电话',
        address VARCHAR(255) NOT NULL COMMENT '地址',
        houser_number VARCHAR(255) NOT NULL COMMENT '门牌号',
        tag VARCHAR(100) NOT NULL COMMENT '便签',
        create_at VARCHAR(100) NOT NULL COMMENT '地址创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const products = `
    create table if not exists products(
        id INT NOT NULL AUTO_INCREMENT,
        product_id VARCHAR(100) NOT NULL COMMENT '商品id',
        product_title VARCHAR(100) NOT NULL COMMENT '商品标题',
        price VARCHAR(100) NOT NULL COMMENT '商品价格',
        score VARCHAR(255) NOT NULL COMMENT '商品评价',
        product_picture_url VARCHAR(255) NOT NULL COMMENT '商品url',
        monthly_sales VARCHAR(100) NOT NULL COMMENT '商品月销售量',
        delivery_distance VARCHAR(100) NOT NULL COMMENT '商品配送距离',
        delivery_fee VARCHAR(100) NOT NULL COMMENT '起配送费用',
        price_detail VARCHAR(100) NOT NULL COMMENT '商家描述',
        create_at VARCHAR(100) NOT NULL COMMENT '地址创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    users,
    address,
    products,
}