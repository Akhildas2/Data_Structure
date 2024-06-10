//anagram

//An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.
//For example, the word "listen" can be rearranged to form the word "silent".

const anagram = (s,t) => {
    return s.length != t.length ? false : s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(anagram("listen", "list"))

const anagram2=(s,t)=>{

}

// input ="appu" ,"papu"   ------>>> true
// input ="listen" ,"list"   ------>>> fasle





