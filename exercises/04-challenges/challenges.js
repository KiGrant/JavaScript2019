/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (str, target) => {
  return str.substr(-1) === target ? true : false;
};
confirmEnding("Bastian", "n");
/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

var repeatStringNumTimes = (str, num) => {
  if (num > 0) {
    return str.repeat(num);
  } else if (num < 0) {
    return str.repeat(0);
  }
};
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", -2);
/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

var findLongestWordLength = string => {
  let stringsplit = string.split(" ");
  let longestWord = 0;
  for (var i = 0; i < stringsplit.length; i++) {
    if (stringsplit[i].length > longestWord) {
      longestWord = stringsplit[i].length;
      console.log(longestWord)
    }
  }
};
findLongestWordLength("May the force be with you"); 
module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
