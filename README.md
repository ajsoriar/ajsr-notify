# ajsr-notify [![Build Status](https://travis-ci.org/ajsoriar/ajsr-notify.svg?branch=master)](https://travis-ci.org/ajsoriar/ajsr-notify)

[![npm version](https://badge.fury.io/js/ajsr-notify.svg)](https://badge.fury.io/js/ajsr-notify)
[![Bower version](https://badge.fury.io/bo/ajsr-notify.svg)](https://badge.fury.io/bo/ajsr-notify)
<!---
[![Bower version](https://badge.fury.io/bo/ajsr-notify.svg)](https://badge.fury.io/bo/ajsr-notify)
[![NuGet version](https://badge.fury.io/nu/ajsr-notify.svg)](https://badge.fury.io/nu/ajsr-notify)
-->

ajsr-notify is a pure javascript plugin to provide simple and customisable notifications. No JQuery needed.

## Use it this way

#### 1 Download and Install ajsr-notify:

 - NPM: **npm install ajsr-notify**
 - yarn: **yarn add ajsr-notify**
 - Bower: **bower install ajsr-notify**
 - github: **https://github.com/ajsoriar/ajsr-notify**
<!--- - NuGet: **PM> Install-Package ajsr-notify** -->


#### 2 Include dependences:

2.1 ajsr-notify.min.js is under `dist` folder.

2.2 Initialize the plugin by referencing the necessary files:

```javascript
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="dist/ajsr-notify.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/css/tmplt-default.min.css">
```


#### 3 Use it!

3.1 This way:

```javascript
ajsrnotify({
    msg: "<b>Welcome!</b> This is amazing!",
    type: "success", // null, "error", "info", "alert", "success"
    position: "center", // null, "right", "left"
    timeout: 2000,
    theme: null // null, "windows-98"
})
```

You will get this:

![ajsr-notify basic usage example](./demo/ajsr-notify-basic-example.png?raw=true "ajsr-notify basic usage example")


#### 5 License

MIT

Copyright (c) 2017 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Free Software, Yeah!**
