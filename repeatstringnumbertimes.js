function repeatStringNumTimes(str, num) {
  var hold = "";
  if (num > 0) {
    for(var i=0; i < num; i++) {
      hold += str;
    }
    return hold;
  } 
  return "";
}

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } 
  else if (num === 1) {
    return str;
  }
  else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}


repeatStringNumTimes("abc", 3);