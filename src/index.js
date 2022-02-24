module.exports = function check(str, bracketsConfig) {
  let strLength = str.length;
  for (let i = 0; i < strLength / 2; i++) {
    bracketsConfig
      .map((el) => el.join(''))
      .map((el) => {
        str = str.replace(el, '');
      });
  }
  return str.length === 0 ? true : false;
};
