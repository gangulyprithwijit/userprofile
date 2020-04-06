const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');


const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

var rollFileTransport = new (transports.DailyRotateFile)({
filename: 'userProfile-%DATE%.log',
datePattern: 'YYYY-MM-DD',
maxSize: '5mb',
maxFiles: '20d'
});

var consoleTransport = new transports.Console({
format: format.combine(
 format.timestamp(),
 format.colorize(),
 format.splat(),
 logFormat
)
});

const logger = createLogger({
  format: combine(
    timestamp(),
    format.splat(),
    logFormat
  ),
  transports: [
    consoleTransport,
    rollFileTransport
  ]
});

module.exports = logger;