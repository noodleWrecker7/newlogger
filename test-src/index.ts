import Logger, { LogLevel } from '../src/Logger'

describe('Tests', function () {
  it('works', (done) => {
    Logger.setLevel(LogLevel.TRACE)
    Logger.time('Timing')
    Logger.info('Info')
    Logger.warn('Warning')
    Logger.error('Error')
    Logger.debug('Debug')
    Logger.trace('Tracing time')
    Logger.debug('' + JSON.stringify({ x: 5 }))
    Logger.timeEnd('Timing')
    done()
  })
})
