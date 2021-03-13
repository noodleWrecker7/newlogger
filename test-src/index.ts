import { logger } from '../src/Logger'
import Logger = logger.Logger

describe('Tests', function () {
  it('works', (done) => {
    Logger.setLevel(Logger.Levels.TRACE)
    Logger.time('Timing')
    Logger.info('Info')
    Logger.warn('Warning')
    Logger.error('Error')
    Logger.debug('Debug')
    Logger.trace('Tracing time')
    Logger.debug({ x: 5 })
    Logger.timeEnd('Timing')
    done()
  })
})
