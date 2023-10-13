// Реализуйте функцию для вывода всех ключей объекта, включая ключи его прототипа

function printKeys(obj) {
  const keys = [];
  let current = obj;
  while (current) {
    keys.push(Object.keys(current));
    current = Object.getPrototypeOf(current);
  }
  console.log(keys.join(', '));
}

const obj1 = {
  a: 1,
  b: 2,
};
obj1.__proto__ = globalThis;
const obj2 = {
  c: 3,
};
obj2.__proto__ = obj1;
const obj3 = {
  d: 4,
};
obj3.__proto__ = obj2;

printKeys(obj3)
