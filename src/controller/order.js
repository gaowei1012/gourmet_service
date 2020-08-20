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
    let { order_title, order_desc, price, order_url, type } = ctx.request.body
    let create_at = new Date()
    if ((order_desc && order_title && price && type && order_url) !== null) {
        await OrderModal.insertOrderCat([order_title, order_desc, order_url, price, type, create_at])
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
exports.getOrderByType = async (ctx, next) => {
    let { type } = ctx.request.body
    if (type !== null) {
        await OrderModal.findOrderByType(type)
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