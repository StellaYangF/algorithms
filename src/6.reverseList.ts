class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 方法一：迭代
// 时间复杂度 o(n),空间复杂度 o(1)
function reverseList(head: ListNode | null): ListNode | null {
  // 1. 记录前一个节点
  let prev = null
  // 2. 记录当前节点
  let curr = head

  while (curr !== null) {
    // 3. 指针指向后走，缓存下一个节点
    const next = curr.next
    // 4. 将next指针指向前一个节点，反转
    curr.next = prev
    // 5. prev 指针指向当前节点
    prev = curr
    // 6. 当前节点也得往前走，之前缓存得那一个
    curr = next
  }

  return prev
}


// 方法二：递归

function reverseListRecurse(head) {
  if (head === null || head.next === null) {
    return head
  }

  const newHead = reverseListRecurse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}