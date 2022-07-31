/*
The three cases to consider are:
- Field already starts with '@' - do nothing
- Field starts with `https://twitter.com/user-name - extract the user-name and add '@' to the front of it
- Field isn't a URL and doesn't start with '@' - Add '@' to the front.

*/

console.log(getUserName("@username"))
console.log(getUserName("username"))
console.log(getUserName("https://www.twitter.com/@username"))
console.log(getUserName("https://www.twitter.com/username"))

// Solution 2

function getUserName(input) {
    const splitted = input.split("/");
    if (splitted.length > 1) {
        input = splitted[splitted.length - 1];
    }

    let userName = ""

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "@") {
            userName = input;
            break;
        }

        userName = "@" + input;
        break;
    }

    return userName
}



console.log(getUserName("@username"))
console.log(getUserName("username"))
console.log(getUserName("https://www.twitter.com/@username"))
console.log(getUserName("https://www.twitter.com/username"))

// Solution 2


function getUserName(input) {
    const splitted = input.split("/");

    if (splitted.length > 1) {
        input = splitted[splitted.length - 1];
    }

    const [firstLetter,] = input;
    const userName = firstLetter === "@" ? input : `@${input}`;

    return userName
}
