function capitalized(str)         //this is where the function thrust by capitalizing the string
{
  var crntarray = str.split(' ');       //the current array in which original element is splitted accordingly
  var newarray = [];            //new string array
  for(var i = 0; i < crntarray.length; i++)     //the loop which every index/es will execute in an array.
  {
    newarray.push(crntarray[i].charAt(0).toUpperCase()+crntarray[i].slice(1)); //the function will thrust by replacing each first letter, in a word, with a capital letter.
  }
  return newarray.join(' ');//will consolidate each component into a string.
}
console.log(capitalized("parents will do what's best for you.")); //calling the function to transform the initial string.