function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    //indexOf returns the position of 1st occurence of a value in a string
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
}

console.log(firstNonRepeatingCharacter("abbcadd"))
console.log(firstNonRepeatingCharacter("abacddbec"))