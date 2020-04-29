interface Chain {
    if(x: unknown): Chain;
    then(callback: Function): Chain;
    else(callback: Function): Chain;
    finally(cb: Function): void;
}
declare type ifChain = (cb: unknown) => Chain;
export declare const ifChain: (x: unknown) => Chain;
export default ifChain;
//# sourceMappingURL=index.d.ts.map