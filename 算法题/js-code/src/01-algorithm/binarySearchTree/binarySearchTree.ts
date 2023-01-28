type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

const treeNode: TreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

/**
 * 二叉树遍历分：前序、后序、中序
 */
const arr: number[] = [];
/**
 * 前序遍历  root-left-right
 * @param node
 * 输出：5,3,2,4,7,6,8
 */
function preOrderSearch(node: TreeNode | null) {
  if (!node) return;
  console.log(node.value);
  arr.push(node.value);
  preOrderSearch(node.left);
  preOrderSearch(node.right);
}

/**
 * 中序遍历  left-root-right
 * @param node
 * 输出：2,3,4,5,6,7,8
 */
function inOrderSearch(node: TreeNode | null) {
  if (!node) return;
  inOrderSearch(node.left);
  console.log(node.value);
  arr.push(node.value);
  inOrderSearch(node.right);
}

/**
 * 后序遍历  left-right-root
 * @param node
 * 输出：2,4,3,6,8,7,5
 */
function postOrderSearch(node: TreeNode | null) {
  if (!node) return;
  postOrderSearch(node.left);
  postOrderSearch(node.right);
  console.log(node.value);
  arr.push(node.value);
}

/**
 * 查找二叉树第k大的数字
 * @param node
 * @param k
 * @returns
 */
function findKthValue(node: TreeNode | null, k: number = 0): number | null {
  inOrderSearch(node);
  return arr.length >= k ? arr[k] : null;
}
