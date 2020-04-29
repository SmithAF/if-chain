/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-use-before-define */
interface Chain {
  if(x: unknown): Chain;
  then(callback: Function): Chain;
  else(callback: Function): Chain;
  finally(cb: Function): void;
}
type ifChain = (cb: unknown) => Chain;

const isFunction = (cb: unknown): cb is Function => typeof cb === 'function';

const _if = (arg: unknown): ifChain => (cb: unknown): Chain =>
  (isFunction(cb) ? cb(arg) : cb) ? op(arg) : noop(arg);

const _finally = (arg: unknown) => (cb: Function): void => cb(arg);

const noop = (arg?: unknown): Chain => ({
  if: _if(arg),
  then: (): Chain => noop(arg),
  else: (cb: Function): Chain => op(cb(arg)),
  finally: _finally(arg),
});

const op = (arg?: unknown): Chain => ({
  if: _if(arg),
  then: (cb: Function): Chain => op(cb(arg)),
  else: (): Chain => noop(arg),
  finally: _finally(arg),
});

export const ifChain = (x: unknown): Chain => (x ? op() : noop());
export default ifChain;
