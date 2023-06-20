(() => {
  // src/twoSum.ts
  function twoSum(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

  // src/hasCycle.ts
  var ListNode = class {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
  };
  function createListNode(array, pos) {
    const len = array.length;
    if (len < 1) {
      return new ListNode();
    }
    let prev = new ListNode(array[0], null);
    let anchorNext;
    for (let i = 1; i++; i < len) {
      const next = prev.next = new ListNode(array[i], null);
      prev = next;
      if (pos === i) {
        anchorNext = next;
      }
    }
    if (anchorNext) {
      prev.next = anchorNext;
    }
    return prev;
  }
  console.log(createListNode([3, 2, 0, -4], 1));
  function hasCycle(head) {
    if (head == null) {
      return false;
    }
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
})();
//# sourceMappingURL=index.js.map
