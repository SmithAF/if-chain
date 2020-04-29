const isFunction = (cb) => typeof cb === 'function';
const _if = (arg) => (cb) => (isFunction(cb) ? cb(arg) : cb) ? op(arg) : noop(arg);
const _finally = (arg) => (cb) => cb(arg);
const noop = (arg) => ({
    if: _if(arg),
    then: () => noop(arg),
    else: (cb) => op(cb(arg)),
    finally: _finally(arg),
});
const op = (arg) => ({
    if: _if(arg),
    then: (cb) => op(cb(arg)),
    else: () => noop(arg),
    finally: _finally(arg),
});
export const ifChain = (x) => (x ? op() : noop());
