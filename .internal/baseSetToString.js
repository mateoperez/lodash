/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
function baseSetToString(func, string){
  return Object.defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': () => string,
    'writable': true
  })
}

export default baseSetToString
