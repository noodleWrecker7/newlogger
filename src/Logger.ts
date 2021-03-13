enum LogLevel {
  TRACE = 1,
  DEBUG = 2,
  INFO = 3,
  TIME = 4,
  WARN = 5,
  ERROR = 6,
  OFF = 99,
}

export module logger {
  export class Logger {
    public static Levels = LogLevel

    private static level: LogLevel = Logger.Levels.DEBUG

    public static info(input: string) {
      if (Logger.level > Logger.Levels.INFO) {
        return
      }
      let str = '[INFO] ' + input
      console.log(Logger.createString(str, '\x1b[37m'))
    }

    public static debug(input: string) {
      if (Logger.level > Logger.Levels.DEBUG) {
        return
      }
      let str = '[DEBUG] ' + input
      console.log(Logger.createString(str, '\x1b[35m'))
    }

    public static trace(input: string) {
      if (Logger.level > Logger.Levels.TRACE) {
        return
      }
      let str = '[TRACE] ' + input
      console.trace(Logger.createString(str, '\x1b[32m'))
    }

    public static warn(input: string) {
      if (Logger.level > Logger.Levels.WARN) {
        return
      }
      let str = '[WARN] ' + input
      console.log(Logger.createString(str, '\x1b[33m'))
    }

    public static error(input: string) {
      if (Logger.level > Logger.Levels.ERROR) {
        return
      }
      let str = '[Error] ' + input
      console.error(Logger.createString(str, '\x1b[31m'))
    }

    public static time(input: string) {
      if (Logger.level > Logger.Levels.TIME) {
        return
      }
      let str = '\x1b[34m[TIMED] ' + input + '\x1b[0m'
      console.time(str)
    }

    public static timeEnd(input: string) {
      let str = '\x1b[34m[TIMED] ' + input + '\x1b[0m'
      console.timeEnd(str)
    }

    private static createString(str: string, color: string) {
      return color + Logger.getTimeStr() + str + '\x1b[0m'
    }

    static setLevel(lvl: LogLevel) {
      Logger.level = lvl
    }

    private static getTimeStr() {
      return '[' + new Date().toTimeString().substr(0, 8) + ']'
    }
  }
}
