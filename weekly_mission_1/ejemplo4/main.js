// JavaScript source code
const logger = require('./logger')

const dblogger = new logger('DB')
dblogger.info ('mensaje informativo')

const accesslogger= new logger('ACCESS')
accesslogger.verbose('mensaje verbose')
