function palindrome(str) {
  var forward = str.replace(/[^a-z0-9z]/gi, '').toLowerCase().split('').join(''); 
  var backward = str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('');
  if (forward === backward) {
    return true;
  }
  return false;
} 


palindrome("eye");