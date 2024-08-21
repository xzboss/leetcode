var Trie = function () {
  this.tag = Symbol("isEnd");
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let p = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    !p[char] && (p[char] = {});
    p = p[char];
  }
  p[this.tag] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let p = this.root;
  for (const char of word) {
    if (!p[char]) return false;
    p = p[char];
  }
  return !!p[this.tag];
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let p = this.root;
  for (const char of prefix) {
    if (!p[char]) return false;
    p = p[char];
  }
  return true;
};

var obj = new Trie();
obj.insert("word");
obj.insert("wore");

console.log(obj.search("wore"), obj.search("wored"));

//module.exports =
