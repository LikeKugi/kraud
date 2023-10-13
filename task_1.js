// Реализовать одну из функция массива на выбор (map, filter, reduce) и заменить ею уже существующую функцию в Array

/**
 *
 * @param {Function} process
 * @param {any?} initial
 * @returns {any}
 */
Array.prototype.reduce = function(process, initial) {
  if (initial === undefined) {
    initial = typeof this[0] === 'number' ? 0 : '';
  }
  for (let i = 0; i < this.length; i += 1) {
    initial = process(initial, this[i], i, this);
  }
  return initial;
}

const testArr = [5, 1, 2, 3];
console.log(testArr.reduce((acc, el) => acc * el))
console.log(testArr.reduce((acc, el) => acc + el, '0'))
console.log(testArr.reduce((acc, el) => acc + el, 0))
console.log(testArr.reduce((acc, el, idx) => ({...acc, [el]: idx})))
