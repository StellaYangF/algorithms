
/**
 * 时间复杂度分析
 * 
 * - 最好情况
 * - 最差情况
 * - 平均情况
 * - 均摊时间
 */

let array: number[] = new Array(10)
let len = 10
let i = 0

// 往数组中添加元素
function add(element: number): void {
  if (i >= len) {
    // 重新申请一个2倍大的数组空间
    let newArray = new Array(len * 2)
    // 把原来 array 数组中的数据依次拷贝到 newArray 中
    for (let j = 0; j < len; j++) {
      newArray[j] = array[j]
    }
    // 将扩容后的数组复制给 array，array现在大小是2倍len了
    array = newArray
    newArray = null
    len = len * 2
  }

  // 将element放到下标为i的位置，下标加1，之后着呢往前走
  array[i] = element
  ++i
}

