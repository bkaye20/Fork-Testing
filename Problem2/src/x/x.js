//Problem 2 
        // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
      //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]. 
     //so get sum of all numbers in array.
    // now take sum of n consecutive numbers.
   // n would be length+1 as 1 number is missing

const express =require('express');
const x =express.Router();
x.get('/array', function (req, res) {
	   ///LOGIC WILL GO HERE 
      
         let arr2= [33, 34, 35, 37, 38]
         let sumArray2=0;
         let x=arr2.length
         let n=arr2.length+1
         let first=arr2[0]
         let last=arr2[x-1]
         let sumOfnNumbers=(n*(first+last)/2)
         for(let i=0;i<x;i++)
         {
           sumArray2=sumArray2+arr2[i];
         }
        
         let missingNumber=sumOfnNumbers-sumArray2
         res.send('The Missing Number is: '+ missingNumber);  
})
module.exports = x;
      
