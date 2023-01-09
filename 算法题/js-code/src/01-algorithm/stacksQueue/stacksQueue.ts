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
