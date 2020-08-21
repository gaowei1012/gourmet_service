const OrderModal = require('../db/mysql')

/* 获取所有订单 */
exports.getAllOrder = async (ctx, next) => {
    await OrderModal.getAllOrder()
        .then(ret => {
            ctx.body = {
                code: 1,
                data: ret
            }
        })
        .catch(err => {
            ctx.body = {
                code: 1,
                data: err
            }
        })

    await next()
}

/* 用户下单 添加购物车 */
exports.addOrderOnes = async (ctx, next) => {
    // 获取到前端传来的值
    // status 0 未完成 1 取消
    console.log('data', ctx.request.body)
    let { order_title, order_desc, price, order_url, price_num, remarks, latitude, longitude, status } = ctx.request.body
    let create_at = new Date()
    if ((order_desc && order_title && price && order_url && remarks && price_num && status) !== null) {
        await OrderModal.insertOrderCat([order_title, order_desc, order_url, price, remarks, price_num, latitude, longitude, status, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    data: err
                }
            })
    } else {
        ctx.body = '非法字段'
    }

    await next()

}

/* 根据type类型，获取单个订单 */
exports.getOrderById = async (ctx, next) => {
    let { id } = ctx.request.body
    if (id !== null) {
        await OrderModal.findOrderById(id)
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    data: err
                }
            })
    } else {
        ctx.body = '非法字段'
    }

    await next()
}

/* 删除单个订单 */
exports.deleteOrderById = async (ctx, next) => {
    let { id } = ctx.request.body
    if (id !== null) {
        await OrderModal.deleteOrderById(id)
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    data: err
                }
            })
    } else {
        ctx.body = '非法字段'
    }

    await next()
}

// 改变订单状态
exports.updateOrderStatus = async (ctx, next) => {
    let { status, id } = ctx.request.body
    if (status !== null) {
        await OrderModal.updateOrderStatus(status, id)
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    data: err
                }
            })
    } else {
        ctx.body = '非法字段'
    }

    await next()
}