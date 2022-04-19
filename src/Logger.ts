export enum LogLevel {
  TRACE = 1,
  DEBUG = 2,
  INFO = 3,
  TIME = 4,
  WARN = 5,
  ERROR = 6,
  OFF = 99,
}

class Logger {
  private level: LogLevel = LogLevel.DEBUG

  public info(input: any) {
    if (this.level > LogLevel.INFO) {
      return
    }
    const str = '[INFO] ' + input
    console.log(this.createString(str, '\x1b[37m'))
  }

  public debug(input: any) {
    if (this.level > LogLevel.DEBUG) {
      return
    }
    const str = '[DEBUG] ' + input
    console.log(this.createString(str, '\x1b[35m'))
  }

  public trace(input?: any) {
    if (this.level > LogLevel.TRACE) {
      return
    }
    const str = '[TRACE] ' + input
    console.trace(this.createString(str, '\x1b[32m'))
  }

  public warn(input: any) {
    if (this.level > LogLevel.WARN) {
      return
    }
    const str = '[WARN] ' + input
    console.log(this.createString(str, '\x1b[33m'))
  }

  public error(input: any) {
    if (this.level > LogLevel.ERROR) {
      return
    }
    const str = '[Error] ' + input
    console.error(this.createString(str, '\x1b[31m'))
  }

  public time(input: string) {
    if (this.level > LogLevel.TIME) {
      return
    }
    const str = '\x1b[34m[TIMED] ' + input + '\x1b[0m'
    console.time(str)
  }

  public timeEnd(input: string) {
    if (this.level > LogLevel.TIME) {
      return
    }
    const str = '\x1b[34m[TIMED] ' + input + '\x1b[0m'
    console.timeEnd(str)
  }

  private createString(str: string, color: string) {
    return color + this.getTimeStr() + str + '\x1b[0m'
  }

  setLevel(lvl: LogLevel) {
    this.level = lvl
  }

  private getTimeStr() {
    return '[' + new Date().toTimeString().substr(0, 8) + ']'
  }
}

export default new Logger()
