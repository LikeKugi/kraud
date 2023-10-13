// Реализовать цикл for of для объекта, который будет на каждой итерации получать ключ и значение
// Речь идет про итераторы, а не for(const entry on Object.entries({}))

const testObj = {
  a: 1,
  b: 2,
  c: 3,

  [Symbol.iterator]() {
    let current = -1;
    const keys = Object.getOwnPropertyNames(this);
    return {
      next: () => {
        if (current + 1 < keys.length) {
          current += 1;
          return {
            value: [keys[current], this[keys[current]]],
            done: false,
          };
        }
        return {value: undefined, done: true}
      },
    };
  },
};

for (const testObjElement of testObj) {
  console.log(testObjElement);
}


const testObj2 = {
  a: 1,
  b: 2,
  c: 3,

  *[Symbol.iterator]() {
    for (const testObj2Key in this) {
      yield [testObj2Key, this[testObj2Key]]
    }
  }
}

for (const testObj2Element of testObj2) {
  console.log(testObj2Element)
}
