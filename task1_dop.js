function bindFunction(fn, a, b) {
	F = F.bind(null, a, b)
	return F;
}