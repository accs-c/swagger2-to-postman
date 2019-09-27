#!/usr/bin/env node
program = require('commander')
Swagger2ToPostman = require('./convert')

convert = (input) => {
  var fs = require('fs');
  fs.readFile(input, 'utf8', function (err, text) {
    const fs = require('fs');
    const testsJson = JSON.parse(fs.readFileSync('./pm_after_scripts.json', 'utf8'));

    var result = new Swagger2ToPostman().convert(JSON.parse(text), testsJson);
    console.log(JSON.stringify(result.collection));
  });
}

program
  .option('-i, --input <input_file>', 'swagger.json')
  .parse(process.argv)

convert(program.input)