/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
   let reverseWord ="";
    for(let i = s.length-1;i>=0;i--){
        reverseWord = reverseWord + s[i];
    }
    if(reverseWord === s){
        return true;
    }else{
        return false;
    }
};
