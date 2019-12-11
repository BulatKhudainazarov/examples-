let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "Text");

console.log( weakMap.has(obj) );

obj = null;

// При работе с обычным объектом ссылка на этот
// самый объект не дала бы ему удалить obj
console.log( weakMap.get(obj) );
/* Потому будет возвращен undefined */


