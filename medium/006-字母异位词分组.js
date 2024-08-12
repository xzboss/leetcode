/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 1 排序
// 思路：异位词排序后的的值是确定一样的（如果有一个更高效的计算唯一值的方式就好了）
// var groupAnagrams = function (strs) {
//   const map = {}
//   for (let i = 0; i < strs.length; i++) {
//     const key = strs[i].split('').sort().join('')
//     if(map[key]){
//         map[key].push(strs[i])
//     }else{
//         map[key] = [strs[i]]
//     }
//   }
//   return Object.values(map)
// }

// 2 唯一值计算换成质数相乘
// 缺点就是的先创建一个字母与质数的映射
var groupAnagrams = function (strs) {
  const chart = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
  };
  const computeKey = (str)=>{
    let key = 1
    for (let i = 0; i < str.length; i++) {
        key *= chart[str[i]]
    }
    return key
  }
  const map = {}
  for (let i = 0; i < strs.length; i++) {
    const key = computeKey(strs[i])
    if(map[key]){
        map[key].push(strs[i])
    }else{
        map[key] = [strs[i]]
    }
  }
  return Object.values(map);
};
console.log(groupAnagrams(["qwe", "ewq", "edr", "dedede"]));
