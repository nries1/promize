const syncCallbacker = (res, rej) => {
  if (
    typeof res !== 'function' ||
    typeof rej !== 'function' ||
    arguments.length < 2
  )
    throw new Error('You must provide two function parameters');
  return rej(res());
};

const asyncCallbacker = (res, rej) => {
  if (
    typeof res !== 'function' ||
    typeof rej !== 'function' ||
    arguments.length < 2
  )
    throw new Error('You must provide two function parameters');
  //   for (let i = 2; i < arguments.length; i++) {
  //     console.log(typeof res(arguments[i], rej));
  //   }
  for (let i = 2; i < arguments.length; i++) {
    let result = res(arguments[i], rej);
    if (!result) return;
  }
};

module.exports = { syncCallbacker, asyncCallbacker };
