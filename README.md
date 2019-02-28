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

# License

[GNU](https://github.com/webarthur/super-ajv/blob/master/LICENSE)

> "Simplicity is the ultimate sophistication" <br>
> Da Vinci
