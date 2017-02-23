function reverseString(str) {
  var array = [];
//   array = str.split('');
//   array = array.reverse();
//   str = array.join('');
  
  str = str.split('').reverse().join('');
  
  return str;
}

reverseString("hello");