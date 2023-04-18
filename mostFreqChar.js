function mostFreqChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let mostFreqChar = '';
    let maxCount = 0;
     for (let char in charCount) {
       if (charCount[char] > maxCount) {
        mostFreqChar = char;
        maxCount = charCount[char];
      }
    }
    return mostFreqChar;
  }
  