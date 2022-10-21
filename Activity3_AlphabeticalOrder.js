function AlphabeticalOrder(string)  //the process of the string
  {
return string.split('').sort().join(''); //this is where the function comes along. The (split) will thrust by splitting the words into letters. The (sort) will thrust by sorting out in an alphabetical order. The (join) will thrust by combining the letters but in a fixed and sorted position.
  }
console.log(AlphabeticalOrder("manlupig"));//the function will process accordingly. Enter a word.
