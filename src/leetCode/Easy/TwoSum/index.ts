/*
* Given an array of integers nums and an integer target,
* return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution,
* and you may not use the same element twice.
* You can return the answer in any order.
*
* 配列の要素のどれかを足すと、和がtargetの数字になるよう、配列のインデックスをreturnする
*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
* */

import { twoSumType } from "./Types";

// ブルートフォース型
export const bruteForceTwoSum: twoSumType = (arr, target) => {
  const arrSize = arr.length;

  for (let i = 0; i < arrSize; i++) {
    for (let j = i + 1; j < arrSize; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  // errorをthrowした場合、testが扱いにくくなるため空配列を返すよう定義
  return [];
  // throw new Error("error");
};
