function recursion(tree) {
	const result = [];
	const inFunc = function(elem, i) {
		if (elem) {
			result[i]? result[i].push(elem.value): result[i] = [elem.value];
			inFunc(elem.left, i + 1);
			inFunc(elem.right, i + 1);
		}
	}
	inFunc(tree, 0);
	return result;
}
    
module.exports = {
    recursion,
}