/*
Given two strings str1 and str2, return true if str1 is a subsequence of str2, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by 
deleting some (can be none) of the characters without disturbing the relative positions 
of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


*/

const isSubsequence = (str1, str2) => {
    for (let i = 0; i < t.length; i++) {
        if (s[0] == t[i]) s = s.substr(1)
    }
    return !s
}

console.log(isSubsequence("acb", "ahbgdc"))