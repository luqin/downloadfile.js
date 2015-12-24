# downloadfile.js

## Installation

```sh
npm i downloadfile --save
```

## Usage

**ES6**
```js
import downloadfile from 'downloadfile';

downloadfile('https://github.com/luqin/downloadfile.js/archive/master.zip');

# or 

downloadfile({
    url: 'https://github.com/luqin/downloadfile.js/archive/master.zip',
    data: {
        user: 'user'
    }
});
```