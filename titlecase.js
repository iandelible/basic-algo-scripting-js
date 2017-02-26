function titleCase(str) {
  var titleCase = str.toLowerCase().split(" ").map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  
  return titleCase.join(" ");
}

titleCase("I'm a little tea pot");
