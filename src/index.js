module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const bracketsMap = new Map(bracketsConfig);
  const bracketsStack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (bracketsMap.has(current)) {
      const currentClosingBracket = bracketsMap.get(current);
      if (
        // same open and close
        currentClosingBracket === current &&
        bracketsStack[bracketsStack.length - 1] === current
      ) {
        bracketsStack.pop();
      } else {
        bracketsStack.push(current);
      }
    } else {
      const lastBracket = bracketsStack.pop();
      const closingBracket = bracketsMap.get(lastBracket);
      if (closingBracket !== current) {
        return false;
      }
    }
  }
  return bracketsStack.length === 0;
};
