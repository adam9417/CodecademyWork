var characterCount = function(string) {
//input string
//split string no space so it's in an array that can be iterated through  
  let counter = 0;  
  let output = {};  
//iterate through array 
  for (let i = 0; i < string.length; i++) {
    if (output[string[i]] === undefined) {
      output[string[i]] = 1; 
    } else {
      output[string[i]] = output[string[i]] + 1
    }
  }
  return output; 
//if count of that letter = undefined
  //count = 1
  //else count++

//output collection of letters and their count 
}
characterCount('agfggf'); // [ ['a', 1], ['g', 3], ['f', 2] ]

//type of variable where we could reference a name and get it's value 0


/* 
  {
    a : 1, 
    g : 3, 
    f : 2
  }
*/
