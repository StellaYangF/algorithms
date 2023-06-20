export function hasCycle(head): boolean {
  if (head == null) { return false }

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

