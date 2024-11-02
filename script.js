// пространство имен для рабты элементов страниц
var UI = window.UI || {};

// пространство имен для функций, которые будут вызваны при загрузке DOM
UI.commonFuncs = UI.commonFuncs || {};


// события при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {

	// перебираем все функции из объекта commonFuncs и вызываем их
	var funcs = UI.commonFuncs;
	for (var func in funcs) {
		if(funcs.hasOwnProperty(func) && typeof funcs[func] === 'function') {
			funcs[func]();
		}
	};

});