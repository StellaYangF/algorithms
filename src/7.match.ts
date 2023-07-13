/**
 * 栈在括号匹配中的应用
 * [{()}([])] 合法
 * {[}()] 不合法
 */


const isMatch = arr => {
  // 1. 基数个时，不合法
  const LEFT = '([{'
  const RIGHT = ')]}'
  const MATCHES = ['()', '{}', '[]']
  const left = []

  for (let i = 0; i < arr.length; i++) {
    const k = arr[i]
    if (LEFT.includes(k)) {
      left.push(k)
    } else if (RIGHT.includes(k)) {
      const last = left.pop()
      if (!MATCHES.includes(last + k)) {
        return false
      }
    }
  }

  if (left.length) {
    return false
  } else {
    return true
  }
}

const t1 = '[{()}([])]'
const t2 = '{[}()]'
console.log(isMatch(t1))
console.log(isMatch(t2))