'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _Value = require('xcontrol/lib/models/Value');

var _Value2 = _interopRequireDefault(_Value);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _tape2.default)('Logger', function (main) {
    main.test('should log on store updates', function (t) {
        var spy = _sinon2.default.spy();

        var TestLogger = function (_Logger) {
            _inherits(TestLogger, _Logger);

            function TestLogger() {
                _classCallCheck(this, TestLogger);

                return _possibleConstructorReturn(this, (TestLogger.__proto__ || Object.getPrototypeOf(TestLogger)).apply(this, arguments));
            }

            _createClass(TestLogger, [{
                key: 'log',
                value: function log(nextState) {
                    spy(nextState);
                }
            }]);

            return TestLogger;
        }((0, _2.default)(_Value2.default));

        var initialState = 1;
        var nextState = 2;
        var l = new TestLogger(initialState);
        t.ok(spy.calledOnceWith(initialState), 'should have logged initial state');
        l.set(nextState);
        t.ok(spy.calledWith(nextState), 'should have logged after update');
        t.equal(spy.callCount, 2, 'should have been called twice');
        t.end();
    });
});