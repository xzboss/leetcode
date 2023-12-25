/**
 * @param {number[]} citations
 * @return {number}
 */
// 快速排序 这样写只取决于排序复杂度，所以可以用计数排序等等
function sort(nums, left, right) {
  if (left >= right) {
    return;
  }
  let L = left,
    R = right;
  let temp = nums[L];
  while (L < R) {
    while (L < R && nums[R] <= temp) {
      R--;
    }
    if (L < R) {
      nums[L] = nums[R];
    }
    while (L < R && nums[L] >= temp) {
      L++;
    }
    if (L < R) {
      nums[R] = nums[L];
    }
  }
  nums[L] = temp;
  sort(nums, left, R - 1);
  sort(nums, L + 1, right);
}

var hIndex = function (citations) {
  sort(citations, 0, citations.length - 1);
  let count = 1;
  while (count <= citations.length && count <= citations[count - 1]) {
    count++;
  }
  return count - 1;
};
console.log(hIndex([1, 2, 1]));
