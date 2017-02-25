function palindrome(str) {
  //originally used a RegExp /\W/g for taking out non-alphanumerics, but the _(underscore) doesn't get taken out
  var forward = str.replace(/[^a-z0-9z]/gi, '').toLowerCase().split('').join(''); 
  var backward = str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('');
  if (forward === backward) {
    return true;
  }
  return false;
} 


palindrome("eye");