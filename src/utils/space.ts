const spaceString = (string: string, n: number) => {
  var ret = [];
  var i;
  var len;

  for (i = 0, len = string.length; i < len; i += n) {
    ret.push(string.substr(i, n));
  }

  return ret;
};

export default spaceString;
