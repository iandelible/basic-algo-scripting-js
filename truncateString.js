function truncateString(str, num) {
  
  if (num <= 3) {
    return str.slice(0, num) + "...";
  }
  else if(str.length > num) {
    var newStr = str.slice(0, num - 3) + "...";
    return newStr;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
