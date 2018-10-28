function sumOfOther(arr) {
	let sum = arr.reduce((a, b) => a + b);
	return arr.map(x => sum - x);
}

module.exports = {
    sumOfOther,
}