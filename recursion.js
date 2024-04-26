/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 1;
  //recursion case
  return nums[0] * product(nums.slice(1));
}

// Their solution
// function product(nums, idx=0){
//   if (idx === nums.length) return 1;
//   return nums[idx] * product(nums, idx + 1);
// }

/** longest: return the length of the longest word in an array of words. */

function longest(words, long = 0) {
  if (words.length === 0) return long;
  if (words[0].length > long){
    long = words[0].length;
  }
  return longest(words.slice(1), long);
}

// Their solution
// function longest(words, idx=0, longestSoFar=0){
//   if (idx === words.length) return longestSoFar;
//   longestSoFar = Math.max(words[idx].length, longestSoFar);
//   return longest(words, idx + 1, longestSoFar);
// }

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  if (idx >= str.length) return newStr;
  if (idx % 2 === 0){
    newStr = newStr + str[idx];
  }
  return everyOther(str, idx + 1, newStr);
}

// Their solution
// function everyOther(str, idx = 0, newStr = ''){
//   if (idx >= str.length) return newStr;
//   newStr += str(idx);
//   return everyOther(str, idx + 2, newStr);
// }

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]){
    return false;
  }
  return isPalindrome(str.slice(1, str.length-1));
}

// Their solution
// function isPalindrome(str, idx=0){
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalidrome(str, idx + 1);
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = '') {
  if (idx === -1) return newStr;
  newStr = newStr + str[idx];
  return revString(str, idx - 1, newStr);
}



/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, newArr = []) {
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      gatherStrings(obj[key], newArr);
    } else {
      if (typeof obj[key] === 'string'){
        newArr.push(obj[key]);
      }
    }
  }
  return newArr;
}

// Their solution
// function gatherStrings(obj){
//   let stringArr = [];
//   for (let key in obj){
//     if (typeof obj[key] === "string") stringArr.push(obj[key]);
//     if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
//   }
//   return stringArr;
// }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
