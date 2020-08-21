const AddressModal = require('../db/mysql')


/* 添加地址 */
exports.insertAddress = async (ctx, next) => {
	console.log('add address', ctx.request.body)
	let { address, username, tel } = ctx.request.body
	let create_at = new Date()
	if ((address && username && tel) !== null) {
		await AddressModal.insertAddress([username, tel, address, create_at])
			.then(ret => {
				ctx.body = {
					code: 1,
					message: '添加成功',
					data: ret
				}
			})
			.catch(err => {
				ctx.body = {
					code:-1,
					message: err
				}
			})
	} else {
		ctx.body = '字段非法'
	}

	await next()
}

/* 获取当前用户地址 */
exports.getAddress = async (ctx, next) => {
	let {username} = ctx.request.body
	if (username !== null) {
		await AddressModal.findAddressByUserName(username)
		.then(ret => {
			ctx.body = {
				code: 1,
				message: 'OK',
				data: ret
			}
		})
		.catch(err => {
			ctx.body = {
				code:-1,
				message: err
			}
		})
	} else {
		ctx.body = '字段非法'
	}

	await next()
}