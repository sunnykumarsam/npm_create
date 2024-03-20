function vowel(str){
    const vowelcheck=['a','e','i','o','u']
    let count=0
    for(let char of str){
        if(vowelcheck.includes(char))
        count++

    }
    return count
}
console.log(vowel('coding Money'))