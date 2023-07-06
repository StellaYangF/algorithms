const list = new Array(10)
let maxLen = 10

export function lru(value) {

  const targetIndex = list.indexOf(value)

  if (targetIndex === 0) {
    return
  }
  if (targetIndex > 0) {
    list.splice(targetIndex, 1)
  }

  if (list.length <= maxLen) {
    list.unshift(value)
  }
  // 1. 是否缓存过

  // 2. 缓存过，移动到头部
  // 3. 没缓存过，追加到头部
  // 4. 满了没有，满了需要移除最后尾部

}
