import test from 'tape'
import sinon from 'sinon'

import Value from 'xcontrol/lib/models/Value'

import Logger from '../'

test('Logger', main => {
    main.test('should log on store updates', t => {
        const spy = sinon.spy()
        class TestLogger extends Logger( Value ){
            log(nextState){
                spy(nextState)
            }
        }
        const initialState = 1
        const nextState = 2
        const l = new TestLogger(initialState)
        t.ok(spy.calledOnceWith(initialState), 'should have logged initial state')
        l.set(nextState)
        t.ok(spy.calledWith(nextState), 'should have logged after update')
        t.equal(spy.callCount, 2, 'should have been called twice')
        t.end()
    })
})