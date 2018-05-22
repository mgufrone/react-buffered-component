[![Build Status](https://travis-ci.org/mgufrone/react-buffered-component.svg?branch=master)](https://travis-ci.org/mgufrone/react-native-google-shortener)

## React Buffered Component

This package allows you to make your component update buffered on a certain condition.


## Installation
You can run this package to use the package
```shell
npm install --save react-buffered-component
```

## How to use the package

You can just extends this base class for your component.
```js

import BufferedComponent extends 'react-buffered-component';

class HelloComponent extends BufferedComponent {
    // set the time you would like to wait in milliseconds
    // default value is 0;
    timeBuffer = 1000;
    // the time when your component receive an update, either props update or internal state update
    cycleBuffer = 10;

    // if you define both of them above, the BufferedComponent will determine which one
    // will be quickest to update the component.

    render() {
        // do your thing here
    }
}

```

The `BufferedComponent` use `shouldComponentUpdate` cycle to buffer the update. if you want to override it, make sure you call something like this


```
class HelloComponent extends BufferedComponent {
....
    shouldComponentUpdate(props, state){
        ...
        const shouldUpdate = super();
        // do your own logic here.
        ...
        // then do return a boolean value to determine if it would update the component or not
    }
....
}
```


## Contribution
I love feedback so you can put your feedback to Issues or make a pull request to this package. I love to get any comments regarding my work. Or you can click donate button below. Happy Coding.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UCLBQU8PV7C3C)
