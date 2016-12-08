var log4js = require('log4js');

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('d:\\node\\mylog.log'),('mylog'));

var logger = log4js.getLogger('mylog');
logger.info('info msg');
logger.warn('warn msg');
logger.error('error msg');
logger.fatal('fatal msg');
logger.debug('debug msg');