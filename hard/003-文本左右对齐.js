/**
给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

注意:

单词是指由非空格字符组成的字符序列。
每个单词的长度大于 0，小于等于 maxWidth。
输入单词数组 words 至少包含一个单词。
 

示例 1:

输入: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
示例 2:

输入:words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
     因为最后一行应为左对齐，而不是左右两端对齐。       
     第二行同样为左对齐，这是因为这行只包含一个单词。
示例 3:

输入:words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]，maxWidth = 20
输出:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// 思路：遍历，计算长度，是否超过，如果超过，停下来计算要多少空格，然后分配空格，组成字符串
var fullJustify = function (words, maxWidth) {
  const result = [];
  let width = 0;
  let tempArr = [];
  function fill(i, last) {
    let str = "";
    let space = maxWidth - width;
    let gap = 0;
    while (space > 0) {
      tempArr[gap] += " ";
      space--;
      gap++;
      if (last && gap >= tempArr.length - 1) {// 如果最后一行，且填充到最后一个单词了，就全填给最后一个
        gap = tempArr.length - 1;
      } else {
        gap = gap % Math.max(1, tempArr.length - 1);
      }
    }
    for (let j = 0; j < tempArr.length; j++) {
      str += tempArr[j];
    }
    result.push(str);
    tempArr = [words[i]];
    width = words[i].length;
  }
  for (let i = 0; i < words.length; i++) {
    if (width + words[i].length + tempArr.length <= maxWidth) {
      tempArr.push(words[i]);
      width += words[i].length;
    } else {
      fill(i, false);
    }
  }
  fill(0, true);
  return result;
};

console.log(
  fullJustify(
    [
      "ask",
      "not",
      "what",
      "your",
      "country",
      "can",
      "do",
      "for",
      "you",
      "ask",
      "what",
      "you",
      "can",
      "do",
      "for",
      "your",
      "country",
    ],
    16
  )
);

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);

console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);

console.log(
  fullJustify(
    [
      "My",
      "momma",
      "always",
      "said,",
      '"Life',
      "was",
      "like",
      "a",
      "box",
      "of",
      "chocolates.",
      "You",
      "never",
      "know",
      "what",
      "you're",
      "gonna",
      "get.",
    ],
    20
  )
);

/**
var fullJustify = function (words, maxWidth) {
  const result = [];
  let width = 0;
  let tempArr = [];
  words.push(new Array(maxWidth));
  for (let i = 0; i < words.length; i++) {
    if (width + words[i].length + tempArr.length <= maxWidth) {
      tempArr.push(words[i]);
      width += words[i].length;
    } else {
      let str = "";
      let space = maxWidth - width;
      let gap = 0;
      while (space > 0) {
        tempArr[gap] += " ";
        space--;
        gap++
        // 左对齐
        if(i === words.length - 1 && gap >= tempArr.length - 1){
          gap = tempArr.length - 1
        }else {
          gap = gap % Math.max(1, tempArr.length - 1 )
        }
      }
      for (let j = 0; j < tempArr.length; j++) {
        str += tempArr[j];
      }
      result.push(str);
      tempArr = [words[i]];
      width = words[i].length;
    }
  }
  return result;
};
 */
