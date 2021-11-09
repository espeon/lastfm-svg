
const fetch = require('node-fetch');

const imgToDataURL = url => {
  return fetch(url).then(response => response.buffer()).then(buffer => `data:image/png;base64,${buffer.toString('base64')}`);
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
};

const autoEllipses = (input, length) => {
  let ret;
  if (containsKanaOrKanji(input)) length = Math.round(length * .75);
  if (input.length > length) ret = `${input.substring(0, length)}...`
  else ret = input
  return ret
};

const containsKanaOrKanji = input => input.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)

module.exports = { autoEllipses, containsKanaOrKanji, imgToDataURL, asyncForEach };