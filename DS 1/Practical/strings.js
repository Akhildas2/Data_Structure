//string 
// strings are used to represent textual data. They are sequences of characters enclosed within single quotes (') or double quotes (")
//Strings are immutable in JavaScript, meaning you cannot modify a string directly after its creation

//create  string
const string = new String("Hello akhildas")
const string2 = "Akhil das "//double quotes
const string3 = 'hi Akhil das'//single quotes
const string4 =`hoho Akhil das `//backticks
console.log("string,string2,string3,string4 :",string,string2,string3,string4);


//string length
// indicates the total number of elements present 
const str="hello akhildas"
console.log("length of string",str.length);


//access the characters
console.log("access the characters",str[4]);
console.log("access",str.charAt(4));


//for looping the string
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


//modify the string 
//The replace() method searches a string for a specified pattern (value or regular expression) and replaces it with a new replacement string. It returns a new string with the replacements made, leaving the original string intact.
console.log(str.replace("hello","hello to"));//replaces first instance of that character or word
console.log(str.replaceAll("l","a"));//replaces all instance of that character or word


//concate
const newstr = str.concat(" how are you")
console.log(newstr);


//trim
// It returns a new string with the leading and trailing whitespace characters removed.
const newstr2="     hello akhil   "
console.log(newstr2.trim());


//searching
console.log(str.indexOf("k"));//showing the index
console.log(str.lastIndexOf("a"));//showing the last element index
console.log(str.startsWith("a"));//give true or false (starting leter)
console.log(str.endsWith("s"));//give true or false (ending leter)



//extracting the substring
console.log(str.substring(11));//showing after that number.that allows you to extract a subset of characters and create a new string with those characters.
console.log(str.slice(11,-1));//that allows you to extract a specific portion of elements and create a new array with those selections.

//converting case
const convert = 23
const converted = {name:"akhil"}
console.log(String(convert));//convert in to string 
console.log(JSON.stringify(converted));//object convert into string
console.log(str.toUpperCase());//convert into upper case
console.log(str.toLowerCase());//convert into lower case
console.log(str.charCodeAt(3));//showing the ascii code 

