

module.exports.textFormatter = function(str){
  let text = str.replace(/\n|\r/g, ";");
  let ar = text.split(";;");

  let resultArrays = [];

  for (const iterator of ar) {
    resultArrays.push(iterator.split(';'))
  }
  if(resultArrays[resultArrays.length - 1][0] === ''){
    resultArrays.pop()
  }
  return resultArrays;
}