# Spark Javascript

**Spark Javascript** is a fast, micro size (256bytes) DOM custom event emitter library. [Demo][1]

## Installing from Bower

```shell
$ bower install spark-javascript --save
```

## Documentation

* Distribution file is in the `dist/` directory.
* See more: [online demo and document][1]

## Usage

```javascript
spark(element [object], event [string], data [object][optional]);
```
Example
```javascript
document.body.addEventListener('say:hello', function(e){
	// print: Object {foo:"bar"}
	console.log(e.detail)
});

spark(document.body, 'say:hello', {foo:'bar'});
```

## Running the test

```shell
$ npm start
```
... and then open a browser and go to `http://localhost:8080`

## How to build

```shell
$ npm run build
```

## Building details

* Rename: `gulp-rename`
* Js Minified and mangled: `gulp-uglify`
* Preserve license comments: `uglify-save-license`

## License MIT
Copyright (c) 2017 Hesam Bayat http://pixudio.com

[1]: https://hesambayat.github.io/spark-javascript/ "See more"
