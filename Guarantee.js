function Guarantee () {
  var _resolve = null
  var _reject = null

  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve
    _reject = reject
  })

  promise.resolve = function () {
    _resolve.apply(promise, arguments)
  }

  promise.reject = function () {
    _resolve.apply(promise, arguments)
  }

  return promise
}

if (typeof module !== 'undefined') {
  module.exports = Guarantee
}
