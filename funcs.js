function isFive(num) {
  return num == 5;
}

function isOdd(number) {
  if (typeof number !== 'number'){
    throw new Error('Not a number')
  }

  if(number%2 === 0){
    return false;
  }
  return true;
}

function myRange(min, max, step = 1) {
  let array = []
  for (let i = min; i < max; step++){
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };