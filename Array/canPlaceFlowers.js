/*

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

*/

function canPlaceFlowers(flowerbed, n) {
    // I need to return true if there is not 1s next each other other wise is false
       
       //flowerbed is an array
       // n is an integer
      if(flowerbed.length < n){
          return false
      }
       
       // [0,0,0]
       // [0,0,0]
       
       //how to can I stop early 
       
       for(let i = 0; i < flowerbed.length; i++){
           if(flowerbed[i] === 0){

               if( i === 0 || flowerbed[i -1] === 0 ){

                   if(i === flowerbed.length - 1 || flowerbed[i + 1] === 0){
                       flowerbed[i] = 1
                       n = n - 1
                 
                   }
               }
               
           } 
       }
       if( n <= 0){
           return true
       } else {
           return false
       }
   };

   console.log(canPlaceFlowers([0,0,0], 3))