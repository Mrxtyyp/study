type TLinkListNode = {
  value: number;
  next?: TLinkListNode | null;
};

export function createLinkList(arr: number[]): TLinkListNode {
  if (arr.length === 0) throw new Error("arr is empty");

  let curNode: TLinkListNode = {
    value: arr[0],
  };
  if (arr.length === 1) return curNode;

  let linkNode: TLinkListNode = curNode;

  for (let i = 1; i < arr.length; i++) {
    linkNode.next = {
      value: arr[i],
    };
    linkNode = linkNode.next;
  }

  return curNode;
}

/**
 * 反转单向链表
 * @param linkNode
 */
export function reverseLinkList(
  linkNode: TLinkListNode
): TLinkListNode["next"] {
  let prevNode = null,
    curNode: TLinkListNode["next"] = linkNode;
  while (curNode) {
    const temNode: TLinkListNode["next"] = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = temNode;
  }
  return prevNode;
}
