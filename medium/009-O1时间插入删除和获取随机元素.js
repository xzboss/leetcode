
/**
 * 
实现RandomizedSet 类：

RandomizedSet() 初始化 RandomizedSet 对象
bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

 

示例：

输入
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出
[null, true, false, true, 2, true, false, 2]

解释
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 */

var RandomizedSet = function() {
  this.list = []
  this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {  
  if(this.map.has(val)){
    return false
  }else {
    this.list.push(val)
    this.map.set(val, this.list.length - 1)
    return true
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {

  if(this.map.has(val)){
    const index = this.map.get(val)
    const lastVal = this.list[this.list.length - 1]
    this.list[index] = lastVal
    this.map.set(lastVal, index)
    this.map.delete(val)
    this.list.pop()
    return true
  }else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const number = Math.floor(Math.random() * this.list.length)
  return this.list[number]
};


var obj = new RandomizedSet()
var param_1 = obj.insert(0)
var param_2 = obj.remove(0)
var param_3 = obj.insert(0)
console.log(param_1, param_2, param_3, obj)


