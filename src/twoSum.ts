// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 96ms, 42.7MB
// 两层 for 循环，时空复杂度为 O(N2)/ O(1)
export function twoSum(nums: number[], target: number): number[] {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  // no matching result
  return []
};

// time: 64ms
// memory: 43.7MB
// 单次循环，对迭代过的数据进行标记(value: key)
// 时空复杂度：O(N)/ O(N)
function twoSum0(nums: number[], target: number): number[] {
  const hasMap = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const existingIndex = hasMap[target - cur]

    if (existingIndex >= 0) {
      return [existingIndex, i]
    }
    hasMap[cur] = i
  }

  return []
}

// Note:
// Map must use API (has, set, get...)
// if m[1] = 0,  m.has(1) => undefined
// if m.set(1, 1), m[0] => {1, 1} 
// time: 80s
// memory: 44.7B
function twoSum1(nums: number[], target: number): number[] {
  const map = new Map
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }

  return []
}