function make(...params) {
	const arrSum = [];
	arrSum.push(...params);
	const inFunc = function(...params) {
		for (let i = 0, len = params.length; i < len; i += 1) {
			if (typeof params[i] === "number")  {
				arrSum.push(params[i]);
			} else if (typeof params[i] === "function") {
				inFunc.valueOf = function() {
					return arrSum.reduce(sum);
				}
			}
		}
		return inFunc;
	}
	return inFunc;
}

function sum(a, b) {
	return a + b;
}

module.exports = {
    make,
}