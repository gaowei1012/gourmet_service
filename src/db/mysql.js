const mysql = require('mysql')
const { database } = require('../config')
const { users, orders, address, shops, recommen } = require('./init')

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.PORT
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

const createTable = (sql) => {
    return query(sql, [])
}

createTable(users)
createTable(orders)
createTable(address)
createTable(shops)
createTable(recommen)

// 用户注册
exports.insterUserData = (val) => {
    const _sql = "insert into users set username=?,password=?,create_at=?;";
    return query(_sql, val)
}

// 获取用户信息
exports.getUserInfo = (id) => {
    const _sql = `select * from users where id=${id};`;
    return (_sql)
}

// 用户登录
exports.findUserLogin = (username, password) => {
    const _sql = `select * from users where username='${username}' and password='${password}';`;
    return query(_sql)
}


// 添加购物车
exports.insertOrderCat = (val) => {
    const _sql = 'insert into orders set order_title=?, order_desc=?, order_url=?, price=?, remarks=?, price_num=?, latitude=?, longitude=?, status=?, create_at=?;'
    return query(_sql, val)
}

// 获取所有订单
exports.getAllOrder = () => {
    const _sql = 'select * from orders;';
    return query(_sql)
}

// 根据 type 类型获取订单
exports.findOrderById = (id) => {
    const _sql = `select * from orders where id=${id};`;
    return query(_sql)
}

// 删除订单
exports.deleteOrderById = (id) => {
    const _sql = `delete from orders where id=${id};`;
    return query(_sql)
}

// 更细用户订单状态
exports.updateOrderStatus = (status, id) => {
    const _sql = `update orders set status=${status} where id=${id};`;
    return query(_sql)
}

// 根据状态获取对应订单
exports.findOrderByStatus = (status) => {
    const _sql = `select * from orders where status=${status};`;
    return query(_sql)
}

// 添加用户地址
exports.insertAddress = (val) => {
    const _sql = 'insert into address set username=?, tel=?, address=?, create_at=?;';
    return query(_sql, val)
}

// 获取用户地址
exports.findAddressByUserName = (username) => {
    console.log('username', username)
    const _sql = `select * from address where username='${username}';`;
    return query(_sql)
}

// 添加商品（商品上架）
exports.insertShops = (val) => {
    const _sql = 'insert into shops set shop_name=?, shop_detail=?, type=?, shop_url=?, price=?, create_at=?;';
    return query(_sql, val)
}

// 根据商品类型获取商品
exports.findShopByType = (type) => {
    const _sql = `select * from shops where type=${type};`;
    return query(_sql)
}

// 插入推荐商品
exports.insertRecommen = (val) => {
    const _sql = 'insert into recommen set shop_name=?, shop_url=?, create_at=?;';
    return query(_sql, val)
}

// 获取推荐商品
exports.findRecommen = () => {
    const _sql = 'select * from recommen;';
    return query(_sql)
}
