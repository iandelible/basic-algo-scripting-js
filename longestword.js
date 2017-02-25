
function findLongestWord(str) {
  var splitToArray = str.split(' ');
  var longest = "a";
  for (i = 0; i < splitToArray.length; i++) {
    if (longest.length < splitToArray[i].length) {
      longest = splitToArray[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
