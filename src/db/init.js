const users = `
    create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const orders = `
    create table if not exists orders(
        id INT NOT NULL AUTO_INCREMENT,
        order_title VARCHAR(100) NOT NULL COMMENT '订单名称',
        order_desc VARCHAR(100) NOT NULL COMMENT '订单描述',
        price VARCHAR(50) NOT NULL COMMENT '价格',
        price_num VARCHAR(50) NOT NULL COMMENT '价格',
        order_url VARCHAR(100) NOT NULL COMMENT '订单商品图片',
        remarks VARCHAR(100) NOT NULL COMMENT '订单备注',
        status VARCHAR(100) NOT NULL COMMENT '订单状态',
        latitude VARCHAR(100) NOT NULL COMMENT '纬度',
        longitude VARCHAR(100) NOT NULL COMMENT '经度',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const address = `
    create table if not exists address(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '地址用户名',
        tel VARCHAR(100) NOT NULL COMMENT '电话',
        address VARCHAR(255) NOT NULL COMMENT '地址详情',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const shops = `
    create table if not exists shops(
        id INT NOT NULL AUTO_INCREMENT,
        shop_name VARCHAR(100) NOT NULL COMMENT '商品名称',
        shop_detail VARCHAR(255) NOT NULL COMMENT '商品描述',
        shop_url VARCHAR(100) NOT NULL COMMENT '商品图片',
        price VARCHAR(50) NOT NULL COMMENT '商品价格',
        type VARCHAR(50) NOT NULL COMMENT '商品类型',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const recommen = `
    create table if not exists recommen(
        id INT NOT NULL AUTO_INCREMENT,
        shop_url VARCHAR(255) NOT NULL COMMENT '商品图片',
        shop_name VARCHAR(100) NOT NULL COMMENT '商品名称',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    users,
    orders,
    address,
    shops,
    recommen,
}
