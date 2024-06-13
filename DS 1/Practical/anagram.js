//anagram

//An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once.
//For example, the word "listen" can be rearranged to form the word "silent".

const anagram = (s, t) => {
    return s.length != t.length ? false : s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(anagram("listen", "list"))

// input ="appu" ,"papu"   ------>>> true
// input ="listen" ,"list"   ------>>> fasle


//using obj
const anagramObj = (s, t) => {
    if (s.length != t.length) return false
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[s[i]] || 0) + 1;

    }


    for (const key in obj1) {
        if (obj1[key] !== obj2[key])
            return false
    }
    return true
}
console.log(anagramObj("ltsi", "list"))
