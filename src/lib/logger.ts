import * as log4js from 'log4js';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import 'reflect-metadata';

export default class Logger {
  private static config: { filename?: string, level?: string };

  static getLogger(): log4js.Logger {
    return log4js.getLogger();
  }

  static {
    Logger.config = { filename: path.basename('app'), level: 'info' };

    const logFilePattern = 'yyyyMMdd.log';
    const fileName = Logger.config.filename || 'app';

    log4js.configure({
      appenders: {
        fileAppender: { type: 'dateFile', filename: Logger.config.filename, pattern: logFilePattern, alwaysIncludePattern: true, keepFileExt: true },
        console: { type: 'console' },
      },
      categories: {
        default: { appenders: ['fileAppender', 'console'], level: Logger.config.level || 'info' },
      },
    });

  }
}