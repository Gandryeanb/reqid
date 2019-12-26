# Reqid
----
## what is reqid ?
reqid is an simple random string generator with a timestamp.   
install with:

    npm install reqid


## Usage example   
----
### If you want to use `option`
Example:
```js
var Reqid = require("reqid");
var option = {
    randomLength: 10,
    separator: '-'
}
var reqid = new Reqid(option);

var requestId = reqid.generate();
console.log(requestId); // 2019-12-26-22-13-16-886-7573869517
```

### If you want to use without `option`
Example:
```js
var Reqid = require("reqid");
var reqid = new Reqid();

var requestId = reqid.generate();
console.log(requestId); // 20191226221316886
```

#### `options` object properties
| Property     | Default   | Description |
|--------------|-----------|-------------|
| randomLength | 4         | a random number after timestamp |
| separator    | ""        | a separator between timestamp |
