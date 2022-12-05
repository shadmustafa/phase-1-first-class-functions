const receivesAFunction = (callback) => {
    callback()
}
// const returnsANamedFunction = () => {
//     let fn = function () { return "" };
//     return fn;
// }
const returnsANamedFunction = () => {
    let fn = function () { return "" };
    return fn;
}
const returnsAnAnonymousFunction = () => {
    return function () {
        return "";
    }
}