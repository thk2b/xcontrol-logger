# xcontrol-logger
A logger for xcontrol controllers

# usage

Basic logging
```js
import Logger from 'xcontrol-logger'
import Value from 'xcontrol/lib/models/Value'

const LoggedValue = Logger ( Value )

const value = new LoggedValue( 1 ) // console: 1
value.set(2) // console: 2
```

Custom logging


```js
import Logger from 'xcontrol-logger'
import Value from 'xcontrol/lib/models/Value'

const MyLogger = Super => class extends Logger ( Super ) {
    log(nextStore){
        console.log('my log:')
        super.log(nextStore)
    }
}

const value = new ( MyLogger ( Value ))('hello') // console: my log: hello
value.set('new value') // console: my log: new value

```
