function LT18(arr_num) // this is where the function galvanized in which the number in array is less than 18 LT=Less Than 18
 { arr_num.sort(function(x,y) //sorting function
           {
        return x-y;
           });

  var narray = [arr_num[0]]; // to store the numbers 
  
  
  for(var j=1; j < arr_num.length; j++) // Once again, the loop is used to run the 'if' statement in every index/es
  {
    if(arr_num[j] < 18) // the if statement will evaluate the numbers "if" the numbers is less than 18
    {
      narray.push(arr_num[j]); // storing the true values
    }
  }
  return narray.join(',');// combining the values (join).
}
console.log(LT18([16,9,10,18,20,14,21,11])); // this is where you utilize the concept of the function in the console accordingly.
