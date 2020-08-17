const AddressModal = require('../db/mysql')


/* 添加地址 */
exports.insertAddress = async (ctx, next) => {
	let { address, usernmae, tel } = ctx.request.body
	if ((address && usernmae && tel) !== null) {
		// await AddressModal
	} else {
		ctx.body = '字段非法'
	}

	await next()
}

/* 获取当前用户地址 */
exports.getAddress = async (ctx, next) => {
	let {username} = ctx.request.bidy
	if (username !== null) {
		// await AddressModal
	} else {
		ctx.body = '字段非法'
	}

	await next()
}