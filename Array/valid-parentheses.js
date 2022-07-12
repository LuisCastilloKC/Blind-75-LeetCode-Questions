/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

 function isValid(s) {
    let map = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        let arr = [];
        for(let i = 0; i < s.length; i ++){
            console.log( s.length)
            
            if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
                arr.push(s[i]);
            }
            else{

                if(arr[arr.length - 1] === map[s[i]]){
                    arr.pop();
                }
                else return false;
            }
        }
        return arr.length === 0 ? true : false;
    };
    

    console.log(isValid("[)"))