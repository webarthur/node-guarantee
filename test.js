const Guarantee = require('./Guarantee.js')

function doSomething () {
  const promise = Guarantee()

  setTimeout(function () {
    promise.resolve('123')
  }, 1000)

  return promise
}

doSomething()
  .then(function (data) {
    console.log(data)
  })
