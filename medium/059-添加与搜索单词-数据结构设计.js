// /**

// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

// 实现词典类 WordDictionary ：

// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，
// 每个 . 都可以表示任何一个字母。

// 示例：

// 输入：
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// 输出：
// [null,null,null,null,false,true,true,true]

// ["","","","search","search","serch","search","search","search"]
// [[""],[""],["."],["a"],["aa"a],["a"],[".a"],["a."]]
//[null,null,null,true,true,false,true,false,false]

// 解释：
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // 返回 False
// wordDictionary.search("bad"); // 返回 True
// wordDictionary.search(".ad"); // 返回 True
//  */

// 用普通对象好点，不会遍历到symbo键盘，Map需要单独处理下
var WordDictionary = function () {
  this.root = new Map();
  this.tag = Symbol("isEnd");
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let pointer = this.root;
  for (const char of word) {
    if (!pointer.has(char)) pointer.set(char, new Map());
    pointer = pointer.get(char);
  }
  pointer.set(this.tag, true);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, pointer = this.root, i = 0) {
  if (pointer === undefined) return false;
  for (; i < word.length; i++) {
    if (word[i] === ".") {
      for (const node of pointer.values()) {
        if (node === true) continue; // 会遍历到 tag 键
        if (this.search(word, node, i + 1)) return true;
      }
      return false;
    }
    if (!pointer.has(word[i])) {
      return false;
    }
    pointer = pointer.get(word[i]);
  }
  return !!pointer.get(this.tag);
};

// /**
//  * Your WordDictionary object will be instantiated and called as such:
var obj = new WordDictionary();
const r = []
const q = [["a"],["ab"],["a"],["a."],["ab"],[".a"],[".b"],["ab."],["."],[".."]];
let i = 0;
for (const item of ["addWord","addWord","search","search","search","search","search","search","search","search"]) {
  if (item === "addWord") {
    obj.addWord(q[i][0]);
  } else {
    r.push(obj.search(q[i][0]));
  }
  i++;
}
console.log(r)
//  */

// //module.exports =
