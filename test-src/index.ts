import { Logger } from '../src/Logger'

describe('Tests', function () {
  it('works', (done) => {
    Logger.setLevel(Logger.Levels.TRACE)
    Logger.time('Timing')
    Logger.info('Info')
    Logger.warn('Warning')
    Logger.error('Error')
    Logger.debug('debug')
    Logger.trace('Tracing time')
    Logger.timeEnd('Timing')
    done()
  })
})
