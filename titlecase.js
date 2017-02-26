function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  var titleCase = array.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  var last = titleCase.join(" ");
  
  return last;
}

titleCase("I'm a little tea pot");
