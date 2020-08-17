
const RecommenModal = require('../db/mysql')

exports.insertRecommen = async (ctx, next) => {
    let { shop_name, shop_url } = ctx.request.body
    let create_at = new Date()
    if ((shop_name && shop_url) !== null) {
        await RecommenModal.insertRecommen([shop_name, shop_url, create_at])
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
    }
    await next()
}

exports.findRecommen = async (ctx, next) => {
    await RecommenModal.findRecommen()
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
    await next()
}