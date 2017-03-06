function rot13(str) { // LBH QVQ VG!
  var garbageArray = [];
  for(var i = 0; i < str.length; i++) {
    var element = str.charCodeAt(i);
    if (element >= 78) {
      garbageArray.push(String.fromCharCode(element - 13));
    }
    else if (element >= 65) {
      garbageArray.push(String.fromCharCode(element + 13));
    }
    else {
      garbageArray.push(String.fromCharCode(element));
    }
  }
  return garbageArray.join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");