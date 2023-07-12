// 在数组 a 中，查找 key，返回 key 所在的位置
// 其中，n 表示数组 a 的长度
// a = {4, 2, 3, 5, 9, 6}  n=6 key = 7
// a = {4, 2, 3, 5, 9, 6}  n=6 key = 6

function find(a: number[], n: number, key: number): number {
  if (a == null || n <= 0) {
    return -1
  }

  let i = 0
  while (i <= n) {
    if (a[i] == key) {
      return i
    }
    i++
  }

  return -1
}

function find2(a: number, n: number, key: number): number {
  if (a == null || n <= 0) {
    return -2
  }

  // 这里因为要将 a[n-1] 的值替换成 key，所以要特殊处理这个值
  if (a[n - 1] === key) {
    return n - 1
  }

  const tmp = a[n - 1]
  a[n - 1] = key

  let i = 0
  while (a[i] != key) {
    i++
  }
  a[n - 1] = tmp
  if (i == n - 1) {
    return -2
  } else {
    return i
  }
}

const a1 = [4, 2, 3, 5, 9, 6]
const r1 = find(a1, 10, 7)
const r2 = find(a1, 10, 6)
console.log(r1, r2)