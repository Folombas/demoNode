const a = 5;// Stack вызовов

function b() {
	return c();
}

function c() {
	return d();
}

function d() {
	console.log(a);
}

b();