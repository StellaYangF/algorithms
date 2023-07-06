// src/1.twoSum.ts
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

// src/2.hasCycle.ts
function hasCycle(head) {
  if (head === null) {
    return false;
  }
  let slow = head.next;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
var hash;
((hash2) => {
  function hasCycle2(head) {
    if (head === null) {
      return false;
    }
    const visited = /* @__PURE__ */ new Set([head]);
    let next = head.next;
    while (next !== null) {
      if (visited.has(next)) {
        return true;
      }
      visited.add(next);
      next = next.next;
    }
    return false;
  }
  hash2.hasCycle = hasCycle2;
})(hash || (hash = {}));
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

// src/4.lru.ts
var list = new Array(10);
var maxLen = 10;
function lru(value) {
  const targetIndex = list.indexOf(value);
  if (targetIndex === 0) {
    return;
  }
  if (targetIndex > 0) {
    list.splice(targetIndex, 1);
  }
  if (list.length <= maxLen) {
    list.unshift(value);
  }
}
export {
  hasCycle,
  lru,
  twoSum
};
//# sourceMappingURL=index.js.map
