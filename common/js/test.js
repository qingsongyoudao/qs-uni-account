/**
 * 验证用户名格式
 */
function userName(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证电子邮箱格式
 */
function email(value) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
	return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证密码格式
 */
function password(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 判断是否为空
 */
function empty(value) {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

export default {
	userName,
	email,
	mobile,
	password,
	contains,
	range,
	rangeLength,
	isEmpty: empty
}
