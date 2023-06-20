/**
 * 环形链表的判断，两种解法：
 * 
 * - 哈希表 o)
 *  - 遍历每一项，缓存到set中，每取出一项，在set中查找，有则证明是环形链表。
 *  
 * - 双指针
 *  - 假设两个指针相距N，则初始时：S-F=N
 *  - 快慢指针，每轮循环，快指针F走2个节点，慢指针S走1一个 S+1, (F+2)
 *  - 因为每一轮，快指针都比慢的多走一个，那么必定会相遇（如果是环形列表）N-1
 *  - 那么S和F在第N轮循环的时候，就会相遇
 *  - S+1 - (F+2) = N-1
 *  - S-F=N
 */
export function hasCycle(head: ListNode): boolean {
  if (head === null) {
    return false
  }

  let slow = head.next
  let fast = head.next

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

namespace hash {
  export function hasCycle(head: ListNode): boolean {
    if (head === null) {
      return false
    }

    const visited = new Set([head])
    let next = head.next

    while (next !== null) {
      if (visited.has(next)) {
        return true
      }

      visited.add(next)
      next = next.next
    }

    return false
  }
}


// TODO: test

class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {
  }
}

function createListNode(array: number[], pos: number): ListNode {
  const len = array.length

  if (len < 1) {
    return new ListNode()
  }

  let prev = new ListNode(array[0], null)
  let anchorNext
  for (let i = 1; i++; i < len) {
    const next = prev.next = new ListNode(array[i], null)
    prev = next

    if (pos === i) {
      anchorNext = next
    }
  }

  if (anchorNext) {
    prev.next = anchorNext
  }

  return prev
}

console.log(createListNode([3, 2, 0, -4], 1))

