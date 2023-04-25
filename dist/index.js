(() => {
  // src/twoSum.ts
  function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const a = nums[i];
      const diff = target - a;
      if (diff !== void 0) {
        return [a, diff];
      }
    }
  }
})();
//# sourceMappingURL=index.js.map
