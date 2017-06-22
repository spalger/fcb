# fcb

Just converts a callback to a promise

```js
import { readFile } from 'fs'
import fcb from 'fcb'

fcb(cb => readFile('path/to/file', 'utf8', cb))
.then(contents => console.log(contents))
.catch(error => console.log(error.code));
```