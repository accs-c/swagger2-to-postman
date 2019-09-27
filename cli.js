#!/usr/bin/env node
program = require('commander')
Swagger2ToPostman = require('./convert')

convert = (input) => {
  var fs = require('fs');
  fs.readFile(input, 'utf8', function (err, text) {
    var result = new Swagger2ToPostman().convert(JSON.parse(text));
    console.log(JSON.stringify(result.collection));
  });
}

program
  .option('-i, --input <input_file>', 'swagger.json')
  .parse(process.argv)

convert(program.input)