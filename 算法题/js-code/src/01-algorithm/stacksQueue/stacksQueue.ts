/**
 * 用两个栈模仿队列
 */
export class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(n: number) {
    this.stack1.push(n);
  }

  delete(): number | null {
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    while (stack1.length) {
      const p = stack1.pop();
      if (p) {
        stack2.push(p);
      }
    }

    const res = stack2.pop();

    while (stack2.length) {
      const p = stack2.pop();
      if (p) {
        stack1.push(p);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}

type TLinkListNode = {
  value: number;
  next: TLinkListNode | null;
};
/**
 * 用链表实现队列
 */
export class QueueList {
  private head: TLinkListNode["next"] = null;
  private tail: TLinkListNode["next"] = null;
  private len: number = 0;

  /**
   * 入队
   * @param n
   */
  add(n: number) {
    const newNode: TLinkListNode = {
      value: n,
      next: null,
    };
    if (this.head === null) this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.len++;
  }

  /**
   * 出队
   * @returns length
   */
  delete(): number | null {
    if (this.head === null) return null;
    if (this.len <= 0) return null;
    this.head = this.head.next;
    this.len--;
    return this.len;
  }

  get length(): number {
    return this.len;
  }
}
