'use strict'

enum LogLevel {
  TRACE = 1,
  DEBUG = 2,
  INFO = 3,
  TIME = 4,
  WARN = 5,
  ERROR = 6,
  OFF = 99,
}

export class Logger {
  public static Levels = LogLevel

  private static level: LogLevel = Logger.Levels.INFO

  public static info(input: string) {
    if (Logger.level > Logger.Levels.INFO) {
      return
    }
    let str = '[INFO] ' + input
    Logger.log(str, '\x1b[37m')
  }

  public static debug(input: string) {
    if (Logger.level > Logger.Levels.DEBUG) {
      return
    }
    let str = '[DEBUG] ' + input
    Logger.log(str, '\x1b[35m')
  }

  public static warn(input: string) {
    if (Logger.level > Logger.Levels.WARN) {
      return
    }
    let str = '[WARN] ' + input
    Logger.log(str, '\x1b[33m')
  }

  public static error(input: string) {
    if (Logger.level > Logger.Levels.WARN) {
      return
    }
    let str = '[WARN] ' + input
    Logger.log(str, '\x1b[33m')
  }

  private static log(str: string, color: string) {
    console.log(color + Logger.getTimeStr() + str + '\x1b[0m')
  }

  static setLevel(lvl: LogLevel) {
    Logger.level = lvl
  }

  private static getTimeStr() {
    return '[' + new Date().toTimeString().substr(0, 8) + ']'
  }
}
