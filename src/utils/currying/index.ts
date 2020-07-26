/**
 * 通用函数柯里化实现
 * 被柯里化的函数，有几个参数，就几个参数后执行
 */
const currying = (fn: Function, ...args: any[]) => {
  // 函数参数个数
  let len = fn.length;
  // 如果柯里化传参时大于或等于函数的参数个数，直接执行
  if (args.length >= len) return fn(...args);
  return (..._args: any[]) => {
    // 每次传入参数时累计
    const newArgs = [...args, ..._args];
    // 参数小于函数参数个数时不执行继续累计
    if (newArgs.length < len) {
      return currying(fn, ...newArgs);
    } else {
      return fn(...newArgs);
    }
  };
};

export default currying;
