# 使い方 for ACCS

1. cloneする
2. npm installする
3. ./cli.js -i ./swagger.json > postman.json


# Swagger 2 to Postman converter
Converter for swagger 2.0 JSON to Postman Collection v1

# Install dependencies
run `$ npm install` to install the dependencies

# Run NPM test
run `$ npm test` to see the converter in action

# Want to convert your own files?
convert.js provides a jsFace class - Swagger2Postman. 
Check test/converter.spec.js for basic usage.

**Initialise class:**

```js
var swaggerConverter = new Swagger2Postman();
```

**Optionally, set a logger:**

```js
swaggerConverter.setLogger(console.log);
```

**Convert your Swagger 2.0 JSON:**

```js
var convertResult = swaggerConverter.convert(swaggerJson);
```

**Check the result:**

```js
convertResult.status === "failed"
```

for unsuccessful conversions. Check convertResult.message

```js
convertResult.status === "passed"
```

for successful conversions. Check convertResult.collection for the Postman collection JSON


**Optional Configuration Parameters:**
The constructor can also take in a map of configuration options

```js
var options = {
  includeQueryParams: false
};

var swaggerConverter = new Swagger2Postman(options);
```

**valid options are:**
includeQueryParams - (default true) Include query string parameters in the request url.
