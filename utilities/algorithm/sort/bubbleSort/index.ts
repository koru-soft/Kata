/*
* 配列をバブルソートする関数
* 時間計算量 O(n^2)
* @param array
* ex array = [7, 5, 10, 3, 4] → [3, 4, 5, 7, 10]
* */
const bubbleSort = (array: number[]) => {
  const arraySize = array.length;
  // end = n, n-1, n-2, n-3, ..., 3, 2, 1
  for (let end = arraySize - 1; end > 0; end--) {
    // i = 1, 2, 3, ..., end-2, end-1
    for (let i = 0; i < end; i++) {
      // 配列を昇順に並び替える処理
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
};

export default bubbleSort;
