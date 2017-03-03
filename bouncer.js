function bouncer(arr) {
  var boun = [];
  for(i=0; i < arr.length; i++) {
    if(Boolean(arr[i]) === true) {
      boun.push(arr[i]);
    }
  } 
  
  return boun;
}

bouncer([7, "ate", "", false, 9]);