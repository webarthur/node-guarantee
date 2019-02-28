# Guarantee.js

Promises without the new constructor keyword.

```javascript
const Guarantee = require('Guarantee')

function doSomething () {
  const promise = Guarantee()

  setTimeout(function () {
    promise.resolve('Yeah!')
  }, 1000)

  return promise
}

doSomething()
  .then(function (data) {
    console.log(data)
  })
```

You can also use the **Promise.new()** function:

```javascript
require('Guarantee')

function doSomething () {
  const promise = Promise.new()

  setTimeout(function () {
    promise.resolve('Yeah!')
  }, 1000)

  return promise
}

doSomething()
  .then(function (data) {
    console.log(data)
  })
```

This package adds the "new function" to Promise __proto__ so you can use Promise.new() instead the Guarantee() standard function.

# License

[GNU](https://github.com/webarthur/super-ajv/blob/master/LICENSE)

> "Simplicity is the ultimate sophistication" <br>
> Da Vinci
