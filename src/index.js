module.exports = function check(str, bracketsConfig) {
  const strArray=str.split("");
  const openingBrackets=bracketsConfig.map(elem=>elem[0]);
  const closingBrackets=bracketsConfig.map(elem=>elem[1]);
  const bracketsStack=[];
  for (let elem of strArray){
    if (openingBrackets.includes(elem)&&!closingBrackets.includes(elem)) bracketsStack.push(elem);
    if (closingBrackets.includes(elem)){
      let pairedBracket=bracketsConfig.find(item=>item[1]===elem)[0];
      if (bracketsStack[bracketsStack.length-1]===pairedBracket) bracketsStack.pop();
      else bracketsStack.push(elem);
    }
  }
  return !bracketsStack.length;
}
