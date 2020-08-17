const mysql = require('mysql')
const { database } = require('../config')
const { users, orders, address, shops } = require('./init')

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

// 发布商品
exports.insertOrderList = (val) => {
    const _sql = 'insert into order set ;';
    return query(_sql, val)
}

// 按分类查询商品
exports.findOrderByType = (type) => {
    const _sql = `select * from  order where type=${type};`;
    return query(_sql)
}

// 添加购物车
exports.insertOrderCat = (val) => {
    const _sql = ''
    return query(_sql)
}

// 获取该用户所有订单
exports.findOrderByUser = (id) => {
    const _sql = `select * from order where id=${id};`;
    return query(_sql)
}

// 添加用户地址
exports.insertAddress = (val) => {
    const _sql = 'insert into address set username=?, tel=?, address=?, create_at=?;';
    return query(_sql, val)
}

// 获取用户地址
exports.getAddressByUserName = (username) => {
    const _sql = `select * from address where username=${username};`;
    return query(_sql)
}

