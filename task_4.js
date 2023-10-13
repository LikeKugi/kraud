// Given an object or en array, return if it is empty

function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}

const testObj1 = {"x": 5, "y": 42};
console.log(isEmpty(testObj1));

const testObj2 = {};
console.log(isEmpty(testObj2));

const testObj3 = [null, false, 0];
console.log(isEmpty(testObj3))

const testObj4 = [];
console.log(isEmpty(testObj4))
