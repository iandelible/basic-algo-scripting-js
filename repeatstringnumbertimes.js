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

repeatStringNumTimes("abc", 3);