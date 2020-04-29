# If-Chain

A tiny library to write if statements like promises

```js
import { ifChain } from 'if-chain';

ifChain(condition)
  .then(doThis)
  .if(secondCondition)
    .then(doThis)
  .else(elseDoThis)
.else(elseDoThis)
  .then(doThis)
.finally(FinallyThis);
```
