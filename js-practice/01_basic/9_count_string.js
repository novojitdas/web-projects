// Count the occurrences of a character in a string.
function count(str,find) {
      return (str.split(find)).length-1;
}

console.log(count("Good","o"));