const cli = require('commander')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

cli.version('1.0.0').description('CLI For the Constructor App').parse()
cli.command('init').action(() => {
  console.log(chalk.green('App generated'))
}).parse()