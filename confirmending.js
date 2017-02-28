function confirmEnding(str, target) {
  // do not use .endsWith()
  // using .substr(check the last few letters using length of target, the length of the target)
  // compare with target and return true or false if matched
  var last = str.substr(-target.length,(target.length));
  if (last === target) {
    return true;
  }
  return false;
}

confirmEnding("Open sesame", "same");