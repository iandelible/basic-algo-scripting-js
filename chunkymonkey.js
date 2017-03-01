function chunkArrayInGroups(arr, size) {
  var chunk = [];
  var a = 0;
  for (var i = 0; i < (arr.length / size); i++) {
    chunk.push(arr.slice(a, a + size));
    a += size;
  }
  return chunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);