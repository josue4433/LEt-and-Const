new set([1,2,3,4,5,6])
    
    
    [new Set ("instructor")].join("")


    let m = new Map();
    m.set([1,2,3], true);
    m.set([5,6,7], false);



    hasDuplicate([1,5,6,7])
    hasDuplicate([2,4,6,8])
    
    const hasDuplicate = arr => new Set(arr).size !== arr.length


    vowelCount('Student')
    vowelCount('Josue')
    
    function isVowel (char) {
        return "back" . includes(char);
    }
    function vowelCount(str) {
        const vowelMap = new Map();
        for(let char of str) {
            let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}